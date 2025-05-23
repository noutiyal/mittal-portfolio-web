
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "LMS",
    description: "A comprehensive Learning Management System for educational institutions with course management, student tracking, and assessment tools.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "AlpineJs"],
  },
  {
    id: 2,
    name: "Apex",
    description: "Business management platform with integrated CRM, inventory tracking, and financial reporting capabilities.",
    technologies: ["PHP", "Laravel", "jQuery", "MySQL", "AJAX"],
  },
  {
    id: 3,
    name: "QuicLoans",
    description: "QuicLoans is an online loan management system that aims to provide a convenient and efficient platform for borrowers and lenders to connect and manage loan processes seamlessly. The system facilitates the entire loan lifecycle, from loan application and approval to repayment and monitoring",
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "Tailwind CSS", "jQuery"],
  },
  {
    id: 4,
    name: "Blissful",
    description: "This Project is Email Martketing platform based on API’s. Get some data from a website and manage the records into database or make campaigns. POST emails collected to Campaigner account.",
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL", "jQuery", "AJAX"],
  },
  {
    id: 5,
    name: "My Auction House",
    description: "Online auction platform with real-time bidding, user authentication, and payment integration.",
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "AJAX", "Tailwind CSS", "jQuery", "Alpine JS"],
  },
  {
    id: 6,
    name: "True911",
    description: "Emergency response coordination system with geolocation features and instant notifications.",
    technologies: ["Laravel", "JavaScript", "MySQL", "AJAX", "Twillio"],
  },
  {
    id: 7,
    name: "SocialBlaze",
    description: "Social media management platform with content scheduling, analytics, and multi-platform integration.",
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "AJAX", "Tailwind CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing my work and contributions to various web applications and systems.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="hover-lift h-full flex flex-col">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-muted/50">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectsSection;
