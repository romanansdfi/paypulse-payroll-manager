
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { mockEmployees } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";

const calculatorSchema = z.object({
  employeeId: z.string().min(1, "Please select an employee"),
  allowances: z.coerce.number().min(0, "Must be 0 or greater"),
  deductions: z.coerce.number().min(0, "Must be 0 or greater"),
  bonus: z.coerce.number().min(0, "Must be 0 or greater"),
});

const SalaryCalculator = () => {
  const { toast } = useToast();
  const [calculationResult, setCalculationResult] = useState<{
    basicSalary: number;
    allowances: number;
    deductions: number;
    bonus: number;
    tax: number;
    netSalary: number;
  } | null>(null);

  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      employeeId: "",
      allowances: 0,
      deductions: 0,
      bonus: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof calculatorSchema>) => {
    const employee = mockEmployees.find(emp => emp.id === values.employeeId);
    
    if (!employee) {
      toast({
        title: "Error",
        description: "Employee not found",
        variant: "destructive",
      });
      return;
    }

    const monthlySalary = employee.basicSalary / 12;
    const taxRate = monthlySalary > 8000 ? 0.25 : monthlySalary > 5000 ? 0.2 : monthlySalary > 3000 ? 0.15 : 0.1;
    const tax = (monthlySalary + values.bonus) * taxRate;
    
    const result = {
      basicSalary: monthlySalary,
      allowances: values.allowances,
      deductions: values.deductions,
      bonus: values.bonus,
      tax,
      netSalary: monthlySalary + values.allowances + values.bonus - values.deductions - tax,
    };
    
    setCalculationResult(result);
    
    toast({
      title: "Salary calculated",
      description: `Net salary: ${formatCurrency(result.netSalary)}`,
    });
  };

  const handleEmployeeChange = (employeeId: string) => {
    form.setValue("employeeId", employeeId);
    setCalculationResult(null);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Salary Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="employeeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee</FormLabel>
                    <Select
                      onValueChange={(value) => handleEmployeeChange(value)}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {mockEmployees
                          .filter(emp => emp.status === "active")
                          .map((emp) => (
                            <SelectItem key={emp.id} value={emp.id}>
                              {emp.name} - {emp.department}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="allowances"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Allowances</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="deductions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Deductions</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="bonus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bonus</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full">Calculate Salary</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Calculation Result</CardTitle>
        </CardHeader>
        <CardContent>
          {calculationResult ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Basic Salary:</div>
                <div className="text-sm font-medium text-right">
                  {formatCurrency(calculationResult.basicSalary)}
                </div>
                
                <div className="text-sm">Allowances:</div>
                <div className="text-sm text-right">
                  {formatCurrency(calculationResult.allowances)}
                </div>
                
                <div className="text-sm">Bonus:</div>
                <div className="text-sm text-right">
                  {formatCurrency(calculationResult.bonus)}
                </div>
                
                <div className="text-sm">Deductions:</div>
                <div className="text-sm text-right text-destructive">
                  - {formatCurrency(calculationResult.deductions)}
                </div>
                
                <div className="text-sm">Tax:</div>
                <div className="text-sm text-right text-destructive">
                  - {formatCurrency(calculationResult.tax)}
                </div>
                
                <div className="border-t pt-2 text-base font-medium">
                  Net Salary:
                </div>
                <div className="border-t pt-2 text-base font-medium text-right">
                  {formatCurrency(calculationResult.netSalary)}
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Generate Salary Slip
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[218px] text-muted-foreground">
              Select an employee and calculate to see results
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SalaryCalculator;
