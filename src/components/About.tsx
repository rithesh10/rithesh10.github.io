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
              Hello! I'm Rithesh Asanthula, a Computer Science undergraduate passionate about building practical, impactful web solutions. 
              I enjoy creating tools that solve real-world problems, such as workout planners using GenAI, mental health support apps, and job search tools.
            </p>
            <p className="text-portfolio-slate mb-4">
              I'm especially interested in backend development, AI integration, and system design. 
              My goal is to create technology that is simple, helpful, and accessible to everyone.
            </p>
            <p className="text-portfolio-slate mb-6">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Java", 
                "JavaScript (ES6+)", 
                "React.js", 
                "Node.js", 
                "Express.js", 
                "MongoDB", 
                "MySQL", 
                "Tailwind CSS", 
                "Flask"
              ].map((tech) => (
                <div key={tech} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-highlight rounded-full mr-2"></div>
                  <span className="text-sm text-portfolio-slate font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-portfolio-highlight opacity-75 rounded-full blur-sm group-hover:opacity-100 transition duration-300"></div>
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="./rithesh.png" // replace with your actual image path
                  alt="Rithesh Asanthula" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;