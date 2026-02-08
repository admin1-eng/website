import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import gvmLogo from "@/assets/gvm-heartbeat-logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "HOME", path: "/", external: false },
  { label: "WATCH ONLINE", path: "https://www.youtube.com/@godsvoiceministries0114", external: true },
  { label: "PARTNER", path: "/partner", external: false },
  { label: "ABOUT US", path: "/about-us", external: false },
  { label: "VISIT US", path: "https://share.google/swOp6M7qJKARhMice", external: true },
  { label: "GET THE APP", path: "/get-the-app", external: false },
];

interface HeaderProps {
  variant?: "transparent" | "solid";
}

const Header = ({ variant = "transparent" }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const headerClasses = variant === "solid" 
    ? "bg-[#2C2C2C] border-b border-border/10" 
    : "absolute top-0 left-0 right-0";

  return (
    <header className={`z-50 p-4 ${headerClasses}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={gvmLogo} 
            alt="Gods Voice Ministries Logo" 
            className="h-10 w-10 rounded-full"
          />
          <div className="text-primary-foreground leading-none">
            <h1 className="text-sm font-bold tracking-tight leading-none">GODS VOICE</h1>
            <p className="text-sm font-bold tracking-tight leading-none">MINISTRIES</p>
          </div>
        </div>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button 
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-muted">
            <nav className="flex flex-col gap-6 mt-12">
              {menuItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
