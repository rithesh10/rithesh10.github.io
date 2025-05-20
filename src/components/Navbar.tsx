import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showResume]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false); // Close menu after clicking
  };

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-portfolio-navy font-bold text-xl">Portfolio</a>

          {/* Desktop Menu */}
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

          {/* Resume button for desktop */}
          <Button 
            variant="outline" 
            className="hidden md:block border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10"
            onClick={toggleResume}
          >
            Resume
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-portfolio-navy"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-40 p-6 md:hidden flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-portfolio-navy">Menu</span>
            <button onClick={() => setShowMobileMenu(false)}>
              <X className="w-6 h-6 text-portfolio-navy" />
            </button>
          </div>

          {["about", "education", "projects", "achievements", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="text-left text-lg text-portfolio-slate hover:text-portfolio-highlight"
            >
              {section}
            </button>
          ))}

          <Button 
            variant="outline" 
            onClick={() => {
              toggleResume();
              setShowMobileMenu(false);
            }}
            className="border-portfolio-highlight text-portfolio-highlight"
          >
            Resume
          </Button>
        </div>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-portfolio-navy">My Resume</h2>
              <Button variant="ghost" size="icon" onClick={toggleResume} className="hover:bg-gray-100 rounded-full">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-1">
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full"
                title="Resume"
              />
            </div>
            <div className="p-4 border-t flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={toggleResume}
                className="border-portfolio-slate text-portfolio-slate hover:bg-portfolio-slate/10"
              >
                Close
              </Button>
              <Button 
                className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white"
                onClick={() => window.open('./resume.pdf', '_blank')}
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
