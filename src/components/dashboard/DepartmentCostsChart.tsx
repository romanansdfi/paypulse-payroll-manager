
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface DepartmentCost {
  department: string;
  cost: number;
}

interface DepartmentCostsChartProps {
  data: DepartmentCost[];
}

const DepartmentCostsChart = ({ data }: DepartmentCostsChartProps) => {
  // Format data for chart
  const chartData = data.map((item) => ({
    name: item.department,
    value: item.cost,
  }));

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Department Costs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar
                dataKey="value"
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCostsChart;
