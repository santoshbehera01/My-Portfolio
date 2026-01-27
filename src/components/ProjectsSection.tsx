import { ExternalLink, Github, Gamepad2, ListTodo, Users, Shield } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const ProjectsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const projects = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Tic Tac Toe",
      description:
        "A classic two-player 3×3 game with real-time win and draw detection. Players alternate between X and O in an interactive console-based or GUI experience.",
      tags: ["Java", "Game Logic", "Interactive"],
      color: "from-primary to-amber-500",
      github: "https://github.com/santoshbehera01/Tictactoe",
    },
    {
      icon: <ListTodo className="w-8 h-8" />,
      title: "Task Reminder",
      description:
        "An intelligent task management application that helps users manage daily tasks and deadlines with customizable, real-time alerts.",
      tags: ["Python", "Task Management", "Alerts"],
      color: "from-blue-500 to-primary",
      github: "#",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Project",
      description:
        "A collaborative project developed with a team, highlighting teamwork, coordination, and practical implementation of software engineering principles.",
      tags: ["Collaboration", "Team Work", "Software Development"],
      color: "from-purple-500 to-primary",
      github: "#",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strongest Password",
      description:
        "A password strength checker and generator that evaluates password security and suggests stronger alternatives for better protection.",
      tags: ["Python", "Security", "Password Generator"],
      color: "from-green-500 to-primary",
      github: "https://github.com/santoshbehera01/First-project",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={headerVariants} className="section-subtitle">— Portfolio</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">My Projects</motion.h2>
          <motion.p variants={headerVariants} className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here are some projects I've worked on. Each one represents a step in
            my learning journey and showcases different skills.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              custom={index}
              className="group glass-card overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 25px 50px -15px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                <motion.div 
                  className="p-4 bg-background/20 backdrop-blur-sm rounded-xl text-foreground"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {project.icon}
                </motion.div>
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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
