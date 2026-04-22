import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Toolkit" },
  { id: "thesis", label: "Thesis" },
  { id: "projects", label: "Prototypes" },
  { id: "achievements", label: "Hall of Fame" },
  { id: "photography", label: "Photography" },
  { id: "contact", label: "Get in Touch" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight cursor-pointer text-primary" onClick={() => scrollTo("hero")}>
            MHF.
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus:outline-none whitespace-nowrap",
                  activeSection === item.id || (!activeSection && item.id === 'hero')
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "text-2xl font-serif text-left transition-colors hover:text-primary",
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
