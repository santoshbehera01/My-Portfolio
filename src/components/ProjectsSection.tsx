import { ExternalLink, Github, Gamepad2, ListTodo, Users, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Tic Tac Toe",
      description:
        "A classic two-player 3×3 game with real-time win and draw detection. Players alternate between X and O in an interactive console-based or GUI experience.",
      tags: ["Java", "Game Logic", "Interactive"],
      color: "from-primary to-amber-500",
    },
    {
      icon: <ListTodo className="w-8 h-8" />,
      title: "Task Reminder",
      description:
        "An intelligent task management application that helps users manage daily tasks and deadlines with customizable, real-time alerts.",
      tags: ["Python", "Task Management", "Alerts"],
      color: "from-blue-500 to-primary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Project",
      description:
        "A collaborative project developed with a team, highlighting teamwork, coordination, and practical implementation of software engineering principles.",
      tags: ["Collaboration", "Team Work", "Software Development"],
      color: "from-purple-500 to-primary",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strongest Password",
      description:
        "A password strength checker and generator that evaluates password security and suggests stronger alternatives for better protection.",
      tags: ["Python", "Security", "Password Generator"],
      color: "from-green-500 to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-fade-up ${headerVisible ? "visible" : ""}`}
        >
          <p className="section-subtitle">— Portfolio</p>
          <h2 className="section-title">My Projects</h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto mt-4 text-reveal ${headerVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            Here are some projects I've worked on. Each one represents a step in
            my learning journey and showcases different skills.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card overflow-hidden hover-lift stagger-item ${cardsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                <div className="p-4 bg-background/20 backdrop-blur-sm rounded-xl text-foreground icon-hover">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors icon-hover"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors icon-hover"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
