
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Dashboard component
    navigate("/", { replace: true });
  }, [navigate]);

  // This will never actually render since we're redirecting,
  // but we need to return something
  return <Dashboard />;
};

export default Index;
