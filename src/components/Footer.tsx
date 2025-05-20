import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Rithesh</h3>
            <p className="text-portfolio-light">Full Stack Developer | AI + Web Projects</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/rithesh10" target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-highlight transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/rithesh10" target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-highlight transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://leetcode.com/rithesh10" target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-highlight transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-portfolio-light mb-4 md:mb-0">
            {/* © {new Date().getFullYear()} Rithesh. All rights reserved. */}
          </p>
          
          <div className="flex space-x-6">
            {["About", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-portfolio-light hover:text-portfolio-highlight transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
