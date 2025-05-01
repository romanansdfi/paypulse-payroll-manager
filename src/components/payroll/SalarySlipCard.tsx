
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { SalarySlip } from "@/types";
import { mockEmployees } from "@/data/mockData";
import { Download } from "lucide-react";

interface SalarySlipCardProps {
  salarySlip: SalarySlip;
}

const SalarySlipCard = ({ salarySlip }: SalarySlipCardProps) => {
  const employee = mockEmployees.find((emp) => emp.id === salarySlip.employeeId);

  const statusColors = {
    paid: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md">
          {employee?.name || "Employee"} - {salarySlip.month} {salarySlip.year}
        </CardTitle>
        <Badge
          className={
            salarySlip.paymentStatus === "paid"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : salarySlip.paymentStatus === "pending"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
          }
        >
          {salarySlip.paymentStatus}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-sm">Basic Salary:</div>
          <div className="text-sm text-right">{formatCurrency(salarySlip.basicSalary)}</div>
          
          {salarySlip.allowances.map((allowance, index) => (
            <React.Fragment key={`allowance-${index}`}>
              <div className="text-xs text-muted-foreground pl-2">
                {allowance.type}:
              </div>
              <div className="text-xs text-muted-foreground text-right">
                {formatCurrency(allowance.amount)}
              </div>
            </React.Fragment>
          ))}
          
          <div className="text-sm mt-1">Deductions:</div>
          <div className="text-sm text-right mt-1 text-destructive">
            {formatCurrency(salarySlip.deductions.reduce((sum, d) => sum + d.amount, 0))}
          </div>
          
          {salarySlip.deductions.map((deduction, index) => (
            <React.Fragment key={`deduction-${index}`}>
              <div className="text-xs text-muted-foreground pl-2">
                {deduction.type}:
              </div>
              <div className="text-xs text-muted-foreground text-right text-destructive">
                {formatCurrency(deduction.amount)}
              </div>
            </React.Fragment>
          ))}
          
          <div className="text-sm mt-1">Tax:</div>
          <div className="text-sm text-right mt-1 text-destructive">
            {formatCurrency(salarySlip.tax)}
          </div>
          
          <div className="border-t pt-2 text-base font-medium mt-1">Net Salary:</div>
          <div className="border-t pt-2 text-base font-medium text-right mt-1">
            {formatCurrency(salarySlip.netSalary)}
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="w-full mt-4">
          <Download className="mr-2 h-4 w-4" /> Download Slip
        </Button>
      </CardContent>
    </Card>
  );
};

export default SalarySlipCard;
