
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-payroll-50 to-payroll-100">
      {/* Left panel - logo and welcome message */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <div className="max-w-md text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-payroll-700 mb-4">PayPulse</h1>
            <div className="h-1 w-20 bg-payroll-500 mx-auto md:mx-0"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-payroll-800">Welcome Back!</h2>
          <p className="text-payroll-600 mb-6">
            Log in to access the PayPulse Payroll Management System and manage your organization's financial operations efficiently.
          </p>
          <div className="hidden md:block">
            <img 
              src="/placeholder.svg" 
              alt="Payroll Illustration" 
              className="max-w-xs mx-auto md:mx-0 opacity-90"
            />
          </div>
        </div>
      </div>
      
      {/* Right panel - login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
