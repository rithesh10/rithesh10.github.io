import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white pt-16">
      <div className="max-w-5xl mx-auto text-center md:text-left animate-fade-in-up">
        <p className="text-portfolio-highlight font-mono mb-5">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-portfolio-navy">Rithesh Asanthula.</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-slate">
          Building practical, impactful web solutions.
        </h2>
        <p className="text-portfolio-light max-w-xl mb-8 text-lg">
          I’m a Computer Science undergraduate passionate about solving real problems through code. 
          Currently, I focus on backend development, AI integration, and system design to build simple, helpful, and accessible technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button className="bg-portfolio-navy text-white hover:bg-portfolio-navy/90 group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          {/* <Button variant="outline" className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10">
            Download Resume
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
