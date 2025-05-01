
import { useToast } from "@/hooks/use-toast";
import TaxRuleCard from "@/components/settings/TaxRuleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const taxRules = [
  {
    id: "1",
    name: "Base Tax Rate",
    minSalary: 0,
    maxSalary: 20000,
    rate: 0.1,
  },
  {
    id: "2",
    name: "Middle Income Rate",
    minSalary: 20001,
    maxSalary: 50000,
    rate: 0.15,
  },
  {
    id: "3",
    name: "Upper Income Rate",
    minSalary: 50001,
    maxSalary: 100000,
    rate: 0.25,
  },
  {
    id: "4",
    name: "High Income Rate",
    minSalary: 100001,
    maxSalary: null,
    rate: 0.3,
  },
];

const deductionTypes = [
  {
    id: "1",
    name: "Health Insurance",
    description: "Basic health insurance plan deduction",
    defaultRate: 0.02,
  },
  {
    id: "2",
    name: "Retirement Plan",
    description: "401(k) or similar retirement savings plan",
    defaultRate: 0.05,
  },
  {
    id: "3",
    name: "Life Insurance",
    description: "Optional life insurance coverage",
    defaultRate: 0.01,
  },
];

const SettingsPage = () => {
  const { toast } = useToast();
  const [taxRulesData, setTaxRulesData] = useState(taxRules);

  const handleUpdateTaxRule = (id: string, data: { rate: number }) => {
    const updatedRules = taxRulesData.map((rule) =>
      rule.id === id ? { ...rule, rate: data.rate } : rule
    );
    setTaxRulesData(updatedRules);

    toast({
      title: "Tax rule updated",
      description: "The tax rule has been updated successfully.",
    });
  };

  return (
    <div className="container py-4 md:py-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure tax rules, deductions, and other payroll settings
        </p>
      </div>

      <Tabs defaultValue="tax-rules">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="tax-rules">Tax Rules</TabsTrigger>
          <TabsTrigger value="deductions">Deductions</TabsTrigger>
        </TabsList>

        <TabsContent value="tax-rules" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {taxRulesData.map((rule) => (
              <TaxRuleCard
                key={rule.id}
                rule={rule}
                onUpdateRule={handleUpdateTaxRule}
              />
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Tax Calculation Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The system uses a progressive tax calculation method. Each tax bracket only applies to income within that range.
              </p>
              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-3 text-sm font-medium">
                  <div>Income Range</div>
                  <div>Tax Rate</div>
                  <div>Example</div>
                </div>
                {taxRulesData.map((rule, idx) => (
                  <div key={rule.id} className="grid grid-cols-3 text-sm">
                    <div>
                      {rule.minSalary.toLocaleString()} - {rule.maxSalary ? rule.maxSalary.toLocaleString() : "∞"}
                    </div>
                    <div>{(rule.rate * 100).toFixed(1)}%</div>
                    <div className={cn("text-muted-foreground", idx === 0 ? "" : "text-xs")}>
                      {idx === 0
                        ? `$10,000 × ${(rule.rate * 100).toFixed(1)}% = $${(10000 * rule.rate).toLocaleString()}`
                        : idx === 1
                        ? `$20,000 × 10% + $15,000 × 15% = $4,250`
                        : "..."}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deductions" className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {deductionTypes.map((deduction) => (
              <Card key={deduction.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">{deduction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {deduction.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      Default rate: {(deduction.defaultRate * 100).toFixed(1)}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
