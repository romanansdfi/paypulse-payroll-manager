
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-payroll-50 to-payroll-100">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-payroll-700 mb-2">PayPulse</h1>
          <p className="text-muted-foreground">Payroll Management System</p>
        </div>
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
