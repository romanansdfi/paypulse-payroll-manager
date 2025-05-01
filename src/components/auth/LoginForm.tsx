
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { mockUsers } from "@/data/mockData";
import { Eye, EyeOff, LogIn } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);

    try {
      // Simple mock authentication
      const user = mockUsers.find((u) => u.email === values.email);

      if (user && values.password === "password") { // In a real app, we would check password hash
        toast({
          title: "Login successful",
          description: `Welcome back, ${user.name}!`,
        });
        
        // Simulate successful login and redirect
        setTimeout(() => {
          setIsLoading(false);
          if (onSuccess) {
            onSuccess();
          } else {
            navigate("/");
          }
        }, 1000);
      } else if (user) {
        // User exists but password is wrong
        throw new Error("Incorrect password");
      } else {
        // User not found
        throw new Error("User not found");
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-payroll-200">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="bg-white pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                      >
                        {showPassword ? 
                          <EyeOff className="h-4 w-4" /> : 
                          <Eye className="h-4 w-4" />
                        }
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Link 
                to="/forgot-password"
                className="text-sm font-medium text-payroll-600 hover:text-payroll-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2" 
              disabled={isLoading}
            >
              <LogIn className="h-4 w-4" />
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col border-t pt-6">
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-payroll-600 hover:text-payroll-700 hover:underline">
            Create Account
          </Link>
        </p>
        <div className="text-xs text-muted-foreground text-center">
          <p>Demo credentials:</p>
          <p>Admin: admin@paypulse.com / password</p>
          <p>Employee: john.doe@company.com / password</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
