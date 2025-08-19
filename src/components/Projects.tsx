import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 h-full">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-portfolio-navy">{title}</CardTitle>
        <CardDescription className="text-portfolio-slate">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-portfolio-highlight text-white font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 mt-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-portfolio-navy hover:text-portfolio-highlight"
          asChild
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        {liveLink && (
          <Button
            variant="ghost"
            size="sm"
            className="text-portfolio-navy hover:text-portfolio-highlight"
            asChild
          >
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Workout & Diet Planner",
      description:
        "An AI-powered fitness app that generates personalized workout and diet plans using Gemini API. Includes tracking, user authentication, and MongoDB integration.",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API", "Tailwind"],
      githubLink: "https://github.com/rithesh10/workout2",
      liveLink: "https://workout-fs4z.onrender.com",
      image: "/workout2.png",
    },
    {
      title: "Automated Testing System (ATS)",
      description:
        "Full-stack testing platform for online quizzes with features like timed assessments, score analysis, and secure login.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/rithesh10/InterviewPreparationBot",
      liveLink: "https://ats-demo.com",
      image: "/ATS.png",
    },
    {
      title: "Manas Mental Health Bot",
      description:
        "A chatbot built using Gemini API for providing emotional and mental health support to students. Focused on stress relief and self-help.",
      technologies: ["React", "Node.js", "Gemini API"],
      githubLink: "https://github.com/rithesh10/ps",
      liveLink: "https://manas-demo.com",
      image: "/manas.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
