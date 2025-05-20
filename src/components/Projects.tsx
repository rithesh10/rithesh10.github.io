
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 h-full">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
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
            <Badge key={tech} variant="outline" className="bg-gray-100 text-portfolio-slate">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="ghost" size="sm" className="text-portfolio-navy hover:text-portfolio-highlight" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        {liveLink && (
          <Button variant="ghost" size="sm" className="text-portfolio-navy hover:text-portfolio-highlight" asChild>
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
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com",
      image: "/placeholder.svg"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard that aggregates data from multiple social media platforms into a unified interface.",
      technologies: ["Vue.js", "Firebase", "Chart.js", "REST APIs"],
      githubLink: "https://github.com/username/project2",
      liveLink: "https://project2-demo.com",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Redux", "Socket.io", "Express"],
      githubLink: "https://github.com/username/project3",
      liveLink: "https://project3-demo.com",
      image: "/placeholder.svg"
    },
    {
      title: "Personal Finance Tracker",
      description: "Application to track expenses, income, and investments with data visualization and budget planning.",
      technologies: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
      githubLink: "https://github.com/username/project4",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-portfolio-navy relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-portfolio-highlight after:mt-2">
          Projects
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
