
import { Employee, SalarySlip, AuthUser, PayrollSummary } from "@/types";

export const mockEmployees: Employee[] = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "IT",
    designation: "Software Engineer",
    email: "john.doe@company.com",
    phone: "555-123-4567",
    basicSalary: 75000,
    dateHired: "2021-05-15",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "HR",
    designation: "HR Manager",
    email: "jane.smith@company.com",
    phone: "555-234-5678",
    basicSalary: 85000,
    dateHired: "2020-03-10",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "EMP003",
    name: "Michael Johnson",
    department: "Finance",
    designation: "Financial Analyst",
    email: "michael.johnson@company.com",
    phone: "555-345-6789",
    basicSalary: 70000,
    dateHired: "2022-01-20",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "EMP004",
    name: "Emily Wilson",
    department: "Marketing",
    designation: "Marketing Specialist",
    email: "emily.wilson@company.com",
    phone: "555-456-7890",
    basicSalary: 65000,
    dateHired: "2021-09-05",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "EMP005",
    name: "Robert Brown",
    department: "IT",
    designation: "Systems Administrator",
    email: "robert.brown@company.com",
    phone: "555-567-8901",
    basicSalary: 72000,
    dateHired: "2022-04-12",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "EMP006",
    name: "Lisa Davis",
    department: "Sales",
    designation: "Sales Representative",
    email: "lisa.davis@company.com",
    phone: "555-678-9012",
    basicSalary: 68000,
    dateHired: "2021-07-30",
    status: "inactive",
    photoUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "EMP007",
    name: "David Miller",
    department: "Finance",
    designation: "Accountant",
    email: "david.miller@company.com",
    phone: "555-789-0123",
    basicSalary: 62000,
    dateHired: "2022-02-15",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "EMP008",
    name: "Sarah Wilson",
    department: "HR",
    designation: "HR Associate",
    email: "sarah.wilson@company.com",
    phone: "555-890-1234",
    basicSalary: 58000,
    dateHired: "2021-11-08",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: "EMP009",
    name: "James Anderson",
    department: "IT",
    designation: "Database Administrator",
    email: "james.anderson@company.com",
    phone: "555-901-2345",
    basicSalary: 78000,
    dateHired: "2020-08-22",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: "EMP010",
    name: "Jennifer Thomas",
    department: "Marketing",
    designation: "Marketing Director",
    email: "jennifer.thomas@company.com",
    phone: "555-012-3456",
    basicSalary: 90000,
    dateHired: "2019-12-05",
    status: "active",
    photoUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  }
];

export const mockSalarySlips: SalarySlip[] = [
  {
    id: "SAL001",
    employeeId: "EMP001",
    month: "April",
    year: 2023,
    basicSalary: 75000 / 12,
    allowances: [
      { type: "Housing", amount: 1000 },
      { type: "Transport", amount: 500 }
    ],
    deductions: [
      { type: "Insurance", amount: 300 },
      { type: "Pension", amount: 625 }
    ],
    tax: 1118.75, // Simplified calculation
    netSalary: 75000 / 12 + 1500 - 925 - 1118.75,
    paymentStatus: "paid",
    paymentDate: "2023-04-30"
  },
  {
    id: "SAL002",
    employeeId: "EMP002",
    month: "April",
    year: 2023,
    basicSalary: 85000 / 12,
    allowances: [
      { type: "Housing", amount: 1200 },
      { type: "Transport", amount: 600 }
    ],
    deductions: [
      { type: "Insurance", amount: 350 },
      { type: "Pension", amount: 708 }
    ],
    tax: 1329.17, // Simplified calculation
    netSalary: 85000 / 12 + 1800 - 1058 - 1329.17,
    paymentStatus: "paid",
    paymentDate: "2023-04-30"
  },
  {
    id: "SAL003",
    employeeId: "EMP003",
    month: "April",
    year: 2023,
    basicSalary: 70000 / 12,
    allowances: [
      { type: "Housing", amount: 950 },
      { type: "Transport", amount: 450 }
    ],
    deductions: [
      { type: "Insurance", amount: 280 },
      { type: "Pension", amount: 583 }
    ],
    tax: 1020.83, // Simplified calculation
    netSalary: 70000 / 12 + 1400 - 863 - 1020.83,
    paymentStatus: "paid",
    paymentDate: "2023-04-30"
  },
  {
    id: "SAL004",
    employeeId: "EMP004",
    month: "April",
    year: 2023,
    basicSalary: 65000 / 12,
    allowances: [
      { type: "Housing", amount: 900 },
      { type: "Transport", amount: 400 }
    ],
    deductions: [
      { type: "Insurance", amount: 260 },
      { type: "Pension", amount: 542 }
    ],
    tax: 921.88, // Simplified calculation
    netSalary: 65000 / 12 + 1300 - 802 - 921.88,
    paymentStatus: "paid",
    paymentDate: "2023-04-30"
  },
  {
    id: "SAL005",
    employeeId: "EMP005",
    month: "April",
    year: 2023,
    basicSalary: 72000 / 12,
    allowances: [
      { type: "Housing", amount: 980 },
      { type: "Transport", amount: 480 }
    ],
    deductions: [
      { type: "Insurance", amount: 290 },
      { type: "Pension", amount: 600 }
    ],
    tax: 1065, // Simplified calculation
    netSalary: 72000 / 12 + 1460 - 890 - 1065,
    paymentStatus: "pending"
  },
  {
    id: "SAL006",
    employeeId: "EMP007",
    month: "April",
    year: 2023,
    basicSalary: 62000 / 12,
    allowances: [
      { type: "Housing", amount: 850 },
      { type: "Transport", amount: 380 }
    ],
    deductions: [
      { type: "Insurance", amount: 250 },
      { type: "Pension", amount: 517 }
    ],
    tax: 866.67, // Simplified calculation
    netSalary: 62000 / 12 + 1230 - 767 - 866.67,
    paymentStatus: "pending"
  }
];

export const mockUsers: AuthUser[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@paypulse.com",
    role: "admin"
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@company.com",
    role: "employee",
    employeeId: "EMP001"
  }
];

export const mockPayrollSummary: PayrollSummary = {
  totalEmployees: 10,
  activeEmployees: 9,
  totalMonthlyPayroll: 723000 / 12,
  avgSalary: 723000 / 10 / 12,
  pendingPayments: 2,
  departmentCosts: [
    { department: "IT", cost: 225000 / 12 },
    { department: "HR", cost: 143000 / 12 },
    { department: "Finance", cost: 132000 / 12 },
    { department: "Marketing", cost: 155000 / 12 },
    { department: "Sales", cost: 68000 / 12 }
  ]
};
