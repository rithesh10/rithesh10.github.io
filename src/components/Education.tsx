import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationItem = ({
  degree,
  institution,
  period,
  description,
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
      degree: "Bachelor of Technology in Computer Science",
      institution: "Keshav Memorial Institute of Technology",
      period: "2022 - Present",
      description:
        "Currently pursuing my degree with a focus on software engineering, data structures, and algorithms.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      description:
        "Completed higher secondary education with a focus on mathematics and computer science.",
    },
    {
      degree: "Secondary School Education",
      institution: "Carmer convent High School",
      period: "2020",
      description: "Completed secondary school with strong academic performance.",
    },
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
