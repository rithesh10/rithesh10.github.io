
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface AchievementProps {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const AchievementCard = ({ title, organization, date, description }: AchievementProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-l-4 border-l-portfolio-highlight h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-1">
          <Award className="h-5 w-5 text-portfolio-highlight mr-2" />
          <CardTitle className="text-lg text-portfolio-navy">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm font-medium text-portfolio-light">
          {organization} • {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-portfolio-slate">{description}</p>
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "First Place - International Hackathon",
      organization: "TechCrunch Disrupt",
      date: "2023",
      description: "Led a team of 4 developers to create an AI-powered accessibility tool that won first place among 200+ global teams."
    },
    {
      title: "Top Contributor Award",
      organization: "Open Source Community",
      date: "2022",
      description: "Recognized for significant contributions to React ecosystem, with over 100 pull requests merged into popular libraries."
    },
    {
      title: "Published Research Paper",
      organization: "IEEE Conference",
      date: "2021",
      description: "Co-authored a research paper on efficient algorithms for distributed systems that received over 500 citations."
    },
    {
      title: "Dean's List",
      organization: "Stanford University",
      date: "2019-2021",
      description: "Maintained a perfect GPA throughout graduate studies, receiving recognition on the Dean's List for academic excellence."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          Achievements & Awards
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              organization={achievement.organization}
              date={achievement.date}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
