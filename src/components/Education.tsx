
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationItem = ({ 
  degree, 
  institution, 
  period, 
  description 
}: { 
  degree: string; 
  institution: string; 
  period: string; 
  description: string;
}) => {
  return (
    <Card className="mb-6 overflow-hidden border-l-4 border-l-portfolio-highlight hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-2">
          <h3 className="text-lg font-semibold text-portfolio-navy">{degree}</h3>
          <div className="flex items-center text-sm text-portfolio-slate font-mono">
            <Calendar className="h-4 w-4 mr-1" />
            {period}
          </div>
        </div>
        <h4 className="flex items-center mb-3 text-portfolio-slate">
          <GraduationCap className="h-4 w-4 mr-2" />
          {institution}
        </h4>
        <p className="text-portfolio-light">{description}</p>
      </CardContent>
    </Card>
  );
};

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2019 - 2021",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on natural language processing applications."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Massachusetts Institute of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Participated in undergraduate research in distributed systems and blockchain technology."
    },
    {
      degree: "High School Diploma",
      institution: "Phillips Exeter Academy",
      period: "2011 - 2015",
      description: "Graduated top of class with advanced courses in mathematics and computer science."
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          Education
        </h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
