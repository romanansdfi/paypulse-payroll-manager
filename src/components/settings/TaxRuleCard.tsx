
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

interface TaxRuleCardProps {
  rule: {
    id: string;
    name: string;
    minSalary: number;
    maxSalary: number | null;
    rate: number;
  };
  onUpdateRule: (id: string, data: { rate: number }) => void;
}

const formSchema = z.object({
  rate: z.coerce
    .number()
    .min(0, "Rate must be at least 0%")
    .max(100, "Rate cannot exceed 100%"),
});

const TaxRuleCard = ({ rule, onUpdateRule }: TaxRuleCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rate: rule.rate * 100, // Convert from decimal to percentage
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdateRule(rule.id, { rate: values.rate / 100 }); // Convert back to decimal
    setIsEditing(false);
  };

  const formatSalaryRange = () => {
    if (!rule.maxSalary) {
      return `Over $${rule.minSalary.toLocaleString()}`;
    } else {
      return `$${rule.minSalary.toLocaleString()} - $${rule.maxSalary.toLocaleString()}`;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-md">{rule.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            Salary Range: {formatSalaryRange()}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">{(rule.rate * 100).toFixed(1)}%</div>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </div>
        </div>

        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Tax Rate</DialogTitle>
              <DialogDescription>
                Update the tax rate for {rule.name}.
                <br />
                Salary Range: {formatSalaryRange()}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="rate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax Rate (%)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="mt-4">
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TaxRuleCard;
