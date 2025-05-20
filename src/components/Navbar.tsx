
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-portfolio-navy font-bold text-xl">Portfolio</a>
        
        <div className="hidden md:flex space-x-6 text-portfolio-slate">
          {["about", "education", "projects", "achievements", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="hover:text-portfolio-highlight transition-colors duration-300 capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        <Button variant="outline" className="hidden md:block border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10">
          Resume
        </Button>

        <button className="md:hidden text-portfolio-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
