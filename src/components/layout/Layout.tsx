
import { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <MobileNav />
      <main className="flex-1 bg-background pb-12">
        {children}
      </main>
      <footer className="border-t py-4 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-muted-foreground">
          <p>© 2023 PayPulse. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
