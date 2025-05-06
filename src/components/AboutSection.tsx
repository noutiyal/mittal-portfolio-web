
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm Jashan Mittal, a passionate software engineer specializing in PHP and Laravel development.
              With a strong foundation in full-stack technologies, I focus on building reliable, scalable, 
              and maintainable web applications that solve real-world problems.
            </p>
            <p className="text-lg">
              My journey in tech has equipped me with deep knowledge in system design, 
              database management, and secure coding practices. I'm constantly exploring new 
              technologies and methodologies to enhance my skill set and deliver better solutions.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p><span className="font-medium">M.Sc IT</span> - PCTE Group of Institutes</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p><span className="font-medium">PGDCA</span> - DAV College</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p><span className="font-medium">BCA</span> - DAV College</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="skills">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCard title="Languages & Frameworks" skills={["PHP", "Laravel", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"]} />
              <SkillCard title="Database" skills={["MySQL", "Database Design", "Query Optimization"]} />
              <SkillCard title="Web Development" skills={["AJAX", "RESTful APIs", "Responsive Design"]} />
              <SkillCard title="Best Practices" skills={["System Design", "Secure Coding", "Code Optimization"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <Card className="hover-lift">
      <CardContent className="p-6">
        <h4 className="font-medium text-lg mb-3">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-muted px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
