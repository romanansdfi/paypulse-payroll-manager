
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";
import { mockEmployees } from "@/data/mockData";
import EmployeeTable from "@/components/employees/EmployeeTable";
import EmployeeForm from "@/components/employees/EmployeeForm";
import { useToast } from "@/hooks/use-toast";
import { Employee } from "@/types";

const EmployeesPage = () => {
  const { toast } = useToast();
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  const handleAddEmployee = (data: Partial<Employee>) => {
    const newEmployee: Employee = {
      id: `EMP${String(employees.length + 1).padStart(3, '0')}`,
      name: data.name || "",
      department: data.department || "",
      designation: data.designation || "",
      email: data.email || "",
      phone: data.phone || "",
      basicSalary: data.basicSalary || 0,
      dateHired: new Date().toISOString().slice(0, 10),
      status: "active",
    };

    setEmployees([newEmployee, ...employees]);
    setShowAddForm(false);
  };

  const handleEditEmployee = (data: Partial<Employee>) => {
    if (!editEmployee) return;

    const updatedEmployees = employees.map((emp) =>
      emp.id === editEmployee.id ? { ...emp, ...data } : emp
    );

    setEmployees(updatedEmployees);
    setEditEmployee(null);
    
    toast({
      title: "Employee updated",
      description: "The employee record has been updated successfully."
    });
  };

  const handleDeleteEmployee = (id: string) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    
    toast({
      title: "Employee deleted",
      description: "The employee record has been deleted successfully."
    });
  };

  return (
    <div className="container py-4 md:py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-muted-foreground">
            Manage your employee records and information
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <UserPlus className="mr-2 h-4 w-4" /> Add Employee
        </Button>
      </div>

      <EmployeeTable
        employees={employees}
        onEdit={setEditEmployee}
        onDelete={handleDeleteEmployee}
      />

      <EmployeeForm
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onSubmit={handleAddEmployee}
        mode="add"
      />

      <EmployeeForm
        isOpen={!!editEmployee}
        onClose={() => setEditEmployee(null)}
        onSubmit={handleEditEmployee}
        initialData={editEmployee || undefined}
        mode="edit"
      />
    </div>
  );
};

export default EmployeesPage;
