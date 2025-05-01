
import { useToast } from "@/hooks/use-toast";
import ReportCard from "@/components/reports/ReportCard";
import { FileText, Users, DollarSign, Calculator, BarChart } from "lucide-react";

const ReportsPage = () => {
  const { toast } = useToast();

  return (
    <div className="container py-4 md:py-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-muted-foreground">
          Generate and download payroll reports
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ReportCard
          title="Monthly Payroll Report"
          description="Complete summary of all salaries, deductions, and taxes paid for the current month."
          icon={<FileText />}
          lastGenerated="May 1, 2023 12:30 PM"
        />
        <ReportCard
          title="Employee Summary"
          description="Overview of all employees with their basic information and current salary details."
          icon={<Users />}
          lastGenerated="April 28, 2023 10:15 AM"
        />
        <ReportCard
          title="Tax Deduction Report"
          description="Detailed breakdown of tax deductions applied to each employee's salary."
          icon={<DollarSign />}
          lastGenerated="April 25, 2023 3:45 PM"
        />
        <ReportCard
          title="Salary Payment History"
          description="Historical record of all salary payments made to employees over time."
          icon={<Calculator />}
          lastGenerated="April 20, 2023 9:00 AM"
        />
        <ReportCard
          title="Department Cost Analysis"
          description="Analysis of payroll costs broken down by departments and roles."
          icon={<BarChart />}
          lastGenerated="April 15, 2023 2:30 PM"
        />
      </div>
    </div>
  );
};

export default ReportsPage;
