import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

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
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-serif font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo("hero")}>
          MHF.
        </div>
        
        <div className="hidden lg:flex items-center gap-6 overflow-x-auto">
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
        </div>
      </div>
    </nav>
  );
}
