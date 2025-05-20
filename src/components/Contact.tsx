import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/rithesh10" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/in/rithesh10" 
    },
    { 
      name: "LeetCode", 
      icon: ExternalLink, 
      url: "https://leetcode.com/rithesh10" 
    }
  ];

  const handleSendEmail = () => {
    window.location.href = "mailto:asanthularithesh@gmail.com?subject=Portfolio%20Contact";
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-portfolio-slate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <Button 
                onClick={handleSendEmail}
                className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white flex items-center justify-center gap-2 py-6"
              >
                <Mail className="h-5 w-5" />
                Send Me an Email
              </Button>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center text-portfolio-slate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-portfolio-highlight" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>asanthularithesh@gmail.com</span>
                </p>
                <p className="flex items-center text-portfolio-slate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-portfolio-highlight" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Hyderabad, India</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 hover:shadow-md transition-shadow duration-300"
                  >
                    <link.icon className="h-5 w-5 mr-2 text-portfolio-highlight" />
                    <span className="text-portfolio-slate">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;