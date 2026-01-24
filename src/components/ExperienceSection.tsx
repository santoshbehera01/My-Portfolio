import { Trophy, Users, Lightbulb, Presentation } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Participation",
      description:
        "Participated in coding hackathons, developing solutions under time constraints and collaborating with peers.",
      year: "2024-25",
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "BPUT Project Exhibition 2025",
      description:
        "Participated in the BPUT Project Exhibition, presenting innovative project ideas and solutions.",
      year: "2025",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Project Collaboration",
      description:
        "Collaborated on academic projects, developing teamwork and communication skills through hands-on experience.",
      year: "2024-25",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Actively learning new programming languages, frameworks, and best practices in software development.",
      year: "Ongoing",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">— Experience & Activities</p>
          <h2 className="section-title">My Journey So Far</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
