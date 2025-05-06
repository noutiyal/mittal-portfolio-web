
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Ucodesoft Solutions",
    position: "PHP/Laravel Developer",
    period: "2022 - Present",
    description: [
      "Developed and maintained web-based applications and APIs using PHP and Laravel.",
      "Created data translation scripts for importing/exporting data between different systems.",
      "Built responsive UIs using HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented secure coding practices and database optimizations for scalable applications.",
    ],
  },
  {
    company: "iTechnolabs",
    position: "PHP/Laravel Developer",
    period: "2019 - 2022",
    description: [
      "Led development of LMS platform for educational institutions.",
      "Developed QuicLoans system for loan management and processing.",
      "Collaborated with UI/UX designers to implement responsive design patterns.",
      "Created custom APIs for third-party integrations and data exchange.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key roles in the tech industry.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-muted transform md:-translate-x-1/2"></div>
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-8 md:mt-0`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.company}</CardTitle>
                      <CardDescription>{exp.position} | {exp.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-disc pl-5">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
