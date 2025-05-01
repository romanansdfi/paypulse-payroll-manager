
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  LayoutDashboard, 
  Users, 
  Calculator, 
  FileText, 
  Settings, 
  LogOut 
} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="md:hidden flex h-16 items-center px-4 border-b bg-white">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col pr-0 sm:max-w-xs">
          <Link to="/" className="flex items-center gap-2 px-2 py-6">
            <div className="font-bold text-xl text-primary">PayPulse</div>
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-2 py-3 text-base font-medium transition-colors hover:bg-secondary rounded-md",
                isActive("/") ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/employees"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-2 py-3 text-base font-medium transition-colors hover:bg-secondary rounded-md",
                isActive("/employees") ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              <Users className="h-5 w-5" />
              <span>Employees</span>
            </Link>
            <Link
              to="/payroll"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-2 py-3 text-base font-medium transition-colors hover:bg-secondary rounded-md",
                isActive("/payroll") ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              <Calculator className="h-5 w-5" />
              <span>Payroll</span>
            </Link>
            <Link
              to="/reports"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-2 py-3 text-base font-medium transition-colors hover:bg-secondary rounded-md",
                isActive("/reports") ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <Link
              to="/settings"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-2 py-3 text-base font-medium transition-colors hover:bg-secondary rounded-md",
                isActive("/settings") ? "bg-secondary text-primary" : "text-muted-foreground"
              )}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>

            <div className="mt-auto border-t pt-4 mt-4">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <LogOut className="mr-2 h-5 w-5" />
                <span>Log out</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="flex-1 flex justify-center items-center">
        <div className="font-bold text-xl text-primary">PayPulse</div>
      </Link>
      <div className="w-10"></div> {/* Empty space for balance */}
    </div>
  );
}
