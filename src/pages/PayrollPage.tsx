
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SalaryCalculator from "@/components/payroll/SalaryCalculator";
import SalarySlipCard from "@/components/payroll/SalarySlipCard";
import { mockSalarySlips } from "@/data/mockData";

const PayrollPage = () => {
  const [activeTab, setActiveTab] = useState("calculator");
  
  return (
    <div className="container py-4 md:py-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Payroll Management</h1>
        <p className="text-muted-foreground">
          Calculate and manage employee salary payments
        </p>
      </div>
      
      <Tabs defaultValue="calculator" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="calculator">Salary Calculator</TabsTrigger>
          <TabsTrigger value="slips">Salary Slips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="mt-6">
          <SalaryCalculator />
        </TabsContent>
        
        <TabsContent value="slips" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Salary Slips</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockSalarySlips.map((slip) => (
              <SalarySlipCard key={slip.id} salarySlip={slip} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PayrollPage;
