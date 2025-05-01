
export type Employee = {
  id: string;
  name: string;
  department: string;
  designation: string;
  email: string;
  phone: string;
  basicSalary: number;
  dateHired: string;
  status: "active" | "inactive";
  photoUrl?: string;
};

export type SalarySlip = {
  id: string;
  employeeId: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: {
    type: string;
    amount: number;
  }[];
  deductions: {
    type: string;
    amount: number;
  }[];
  tax: number;
  netSalary: number;
  paymentStatus: "paid" | "pending" | "processing";
  paymentDate?: string;
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
  employeeId?: string;
};

export type PayrollSummary = {
  totalEmployees: number;
  activeEmployees: number;
  totalMonthlyPayroll: number;
  avgSalary: number;
  pendingPayments: number;
  departmentCosts: {
    department: string;
    cost: number;
  }[];
};
