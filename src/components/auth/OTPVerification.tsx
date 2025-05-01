
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";

interface OTPVerificationProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
  email: string;
}

const OTPVerification = ({ onVerify, onResend, email }: OTPVerificationProps) => {
  const { toast } = useToast();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 6 digits of the verification code.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      onVerify(otp);
      setIsVerifying(false);
    }, 1000);
  };

  const handleResendOTP = () => {
    onResend();
    // Reset OTP input
    setOtp("");
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-payroll-200">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Verify Email</CardTitle>
        <CardDescription className="text-center">
          We've sent a verification code to <span className="font-medium">{email}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email address
          </div>

          <div className="flex justify-center">
            <InputOTP 
              maxLength={6} 
              value={otp} 
              onChange={(value) => setOtp(value)}
              disabled={isVerifying}
              className="gap-2"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button 
            onClick={handleVerify} 
            className="w-full mt-4" 
            disabled={otp.length !== 6 || isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify Email"}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4 border-t pt-6">
        <div className="text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button 
            onClick={handleResendOTP} 
            className="font-medium text-payroll-600 hover:text-payroll-700 hover:underline"
          >
            Resend OTP
          </button>
        </div>
        <Link 
          to="/login"
          className="text-sm font-medium text-payroll-600 hover:text-payroll-700 hover:underline"
        >
          Back to Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OTPVerification;
