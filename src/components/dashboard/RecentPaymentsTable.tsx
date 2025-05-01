
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { mockSalarySlips } from "@/data/mockData";
import { mockEmployees } from "@/data/mockData";

const RecentPaymentsTable = () => {
  // Join salary slips with employee data
  const payments = mockSalarySlips.map((slip) => {
    const employee = mockEmployees.find((emp) => emp.id === slip.employeeId);
    return {
      id: slip.id,
      employee: employee?.name || "Unknown",
      amount: slip.netSalary,
      date: slip.paymentDate || "-",
      status: slip.paymentStatus,
    };
  });

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.employee}</TableCell>
                <TableCell>{formatCurrency(payment.amount)}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      payment.status === "paid" ? "default" : 
                      payment.status === "pending" ? "outline" : 
                      "secondary"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentPaymentsTable;
