
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white pt-16">
      <div className="max-w-5xl mx-auto text-center md:text-left animate-fade-in-up">
        <p className="text-portfolio-highlight font-mono mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-portfolio-navy">John Doe.</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-slate">I build things for the web.</h2>
        <p className="text-portfolio-light max-w-xl mb-8 text-lg">
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button className="bg-portfolio-navy text-white hover:bg-portfolio-navy/90 group">
            See My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
