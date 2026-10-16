import { ExternalLink, Github, Gamepad2, Wallet, Bot, Building2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import hostelSystemImg from "@/assets/projects/hostel-management-system.png";
import aiResumeImg from "@/assets/projects/ai-resume-analyzer.png";
import expenseTrackerImg from "@/assets/projects/expense-tracker.png";
import ticTacToeImg from "@/assets/projects/tic-tac-toe.png";

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
      icon: <Building2 className="w-8 h-8" />,
      image: hostelSystemImg,
      title: "Hostel Management System",
      description:
        "A full hostel management web system with admin & student dashboards, notice board, gallery, anti ragging cell, emergency contacts, and health facilities info backed by Firebase.",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      color: "from-cyan-500 to-primary",
      github: "https://github.com/santoshbehera01/Smart-Hostel-Student-System",
      demo: "https://eatm-hostel-system.vercel.app/",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      image: aiResumeImg,
      title: "AI Resume Analyzer",
      description:
        "An intelligent tool that analyzes resumes against job descriptions, providing ATS optimization scores and actionable feedback.",
      tags: ["AI", "Resume Analysis", "NLP", "Web App"],
      color: "from-blue-500 to-primary",
      github: "https://github.com/santoshbehera01/AI-Resume-Analyzer",
      demo: "https://ai-resume-analyzer-sb01.vercel.app/",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      image: expenseTrackerImg,
      title: "Expense Tracker",
      description:
        "A Python Tkinter-based Expense Tracker application with CSV/JSON support for managing daily expenses.",
      tags: ["Python", "Tkinter", "Expense Tracker"],
      color: "from-green-500 to-primary",
      github: "https://github.com/santoshbehera01/Expense-Tracker",
      demo: "#",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      image: ticTacToeImg,
      title: "Tic Tac Toe",
      description:
        "A classic two player 3×3 game with real time win and draw detection. Players alternate between X and O in an interactive console-based or GUI experience.",
      tags: ["Java", "Game Logic", "Interactive"],
      color: "from-primary to-fuchsia-500",
      github: "https://github.com/santoshbehera01/Tictactoe",
      demo: "#",
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
              {/* Preview: real screenshot if provided, else gradient + icon fallback */}
              <div className="h-40 relative overflow-hidden">
                {project.image ? (
                  <>
                    <motion.img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
                  </>
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                  >
                    <motion.div
                      className="p-4 bg-background/20 backdrop-blur-sm rounded-xl text-foreground"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                )}
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
                  {project.demo && project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
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