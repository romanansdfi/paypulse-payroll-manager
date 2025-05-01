
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
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
import { KeyRound, ArrowLeft } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically call an API to handle password reset
      // For now, we'll simulate a successful request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      
      toast({
        title: "Recovery email sent",
        description: `Instructions to reset your password have been sent to ${values.email}`,
      });
    } catch (error) {
      toast({
        title: "Request failed",
        description: "We couldn't process your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-payroll-50 to-payroll-100 p-6">
        <Card className="w-full max-w-md shadow-lg border-payroll-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
            <CardDescription className="text-center">
              We have sent password recovery instructions to your email
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-payroll-100 p-3">
              <KeyRound className="h-8 w-8 text-payroll-600" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Please check your email inbox and follow the instructions to reset your password. If you don't see the email, check your spam folder.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
            <Link 
              to="/login"
              className="flex items-center text-sm font-medium text-payroll-600 hover:text-payroll-700 hover:underline"
            >
              <ArrowLeft className="mr-1 h-3 w-3" /> Back to login
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-payroll-50 to-payroll-100 p-6">
      <Card className="w-full max-w-md shadow-lg border-payroll-200">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Enter your email to receive password reset instructions
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
                        autoComplete="email"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Instructions..." : "Send Reset Instructions"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link 
            to="/login"
            className="flex items-center text-sm font-medium text-payroll-600 hover:text-payroll-700 hover:underline"
          >
            <ArrowLeft className="mr-1 h-3 w-3" /> Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
