
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  LayoutDashboard, 
  Users, 
  Calculator, 
  FileText, 
  Settings, 
  LogOut
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MainNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex h-16 items-center px-4 border-b bg-white">
      <div className="flex items-center gap-6 lg:gap-10 mr-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-primary">PayPulse</div>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link
            to="/employees"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/employees") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Employees</span>
            </div>
          </Link>
          <Link
            to="/payroll"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/payroll") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-1">
              <Calculator className="h-4 w-4" />
              <span>Payroll</span>
            </div>
          </Link>
          <Link
            to="/reports"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/reports") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Reports</span>
            </div>
          </Link>
          <Link
            to="/settings"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/settings") ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://randomuser.me/api/portraits/women/12.jpg" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin@paypulse.com
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
