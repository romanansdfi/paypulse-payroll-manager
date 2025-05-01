
import StatCard from "@/components/dashboard/StatCard";
import DepartmentCostsChart from "@/components/dashboard/DepartmentCostsChart";
import PaymentStatusChart from "@/components/dashboard/PaymentStatusChart";
import RecentPaymentsTable from "@/components/dashboard/RecentPaymentsTable";
import { mockPayrollSummary } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";
import { Users, DollarSign, Calculator, Clock } from "lucide-react";

const Dashboard = () => {
  const { totalEmployees, activeEmployees, totalMonthlyPayroll, avgSalary, pendingPayments, departmentCosts } = mockPayrollSummary;

  return (
    <div className="container py-4 md:py-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Payroll Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your organization's payroll data and statistics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Employees"
          value={totalEmployees}
          icon={<Users />}
          description={`${activeEmployees} active`}
        />
        <StatCard
          title="Monthly Payroll"
          value={formatCurrency(totalMonthlyPayroll)}
          icon={<DollarSign />}
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatCard
          title="Average Salary"
          value={formatCurrency(avgSalary)}
          icon={<Calculator />}
          trend={{ value: 1.1, isPositive: true }}
        />
        <StatCard
          title="Pending Payments"
          value={pendingPayments}
          icon={<Clock />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4 mt-6">
        <DepartmentCostsChart data={departmentCosts} />
        <PaymentStatusChart />
      </div>

      <div className="mt-6">
        <RecentPaymentsTable />
      </div>
    </div>
  );
};

export default Dashboard;
