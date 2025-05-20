
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-portfolio-slate mb-4">
              Hello! My name is John, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-portfolio-slate mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, and a huge corporation. My main focus these days is building accessible, 
              inclusive products and digital experiences for a variety of clients.
            </p>
            <p className="text-portfolio-slate mb-6">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "TailwindCSS"].map((tech) => (
                <div key={tech} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-highlight rounded-full mr-2"></div>
                  <span className="text-sm text-portfolio-slate font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-portfolio-highlight opacity-75 rounded-lg blur-sm group-hover:opacity-100 transition duration-300"></div>
            <Card className="relative h-full border-none">
              <CardContent className="p-0 h-full">
                <div className="bg-gray-300 h-full w-full rounded-lg min-h-[300px] md:min-h-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
