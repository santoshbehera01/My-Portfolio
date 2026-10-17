import { ExternalLink, Github, Gamepad2, Wallet, Bot, Building2, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import hostelSystemImg from "@/assets/projects/hostel-management-system.png";
import aiResumeImg from "@/assets/projects/ai-resume-analyzer.png";
import expenseTrackerImg from "@/assets/projects/expense-tracker.png";
import ticTacToeImg from "@/assets/projects/tic-tac-toe.png";

// Cycle of tag pill colors (background / text / border)
const tagPalette = [
  "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
];

// Accent color per project (used for "View Project" link + hover glow)
const accentPalette = [
  "text-cyan-400 hover:text-cyan-300",
  "text-violet-400 hover:text-violet-300",
  "text-emerald-400 hover:text-emerald-300",
  "text-fuchsia-400 hover:text-fuchsia-300",
];

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
        "A full hostel management web system with admin & student dashboards, notice board, gallery, anti-ragging cell, emergency contacts, and health facilities info — backed by Firebase.",
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
        "A classic two-player 3×3 game with real-time win and draw detection. Players alternate between X and O in an interactive console-based or GUI experience.",
      tags: ["Java", "Game Logic", "Interactive"],
      color: "from-primary to-fuchsia-500",
      github: "https://github.com/santoshbehera01/Tictactoe",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient glow accents */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={headerVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wide uppercase mb-4"
          >
          Projects
          </motion.span>
          <motion.h2 variants={headerVariants} className="section-title">
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={headerVariants} className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A collection of my recent work showcasing creativity and technical expertise.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => {
            const accent = accentPalette[index % accentPalette.length];
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                custom={index}
                className="group glass-card overflow-hidden rounded-2xl flex flex-col"
                whileHover={{ y: -8, boxShadow: "0 25px 50px -15px rgba(0,0,0,0.3)" }}
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
                <div className="p-6 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${tagPalette[(index + tagIndex) % tagPalette.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-1">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-border/60 mt-5 pt-4 flex items-center justify-between">
                    <a
                      href={project.demo && project.demo !== "#" ? project.demo : project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${accent}`}
                    >
                      View Project
                      <ArrowRight size={14} />
                    </a>

                    <div className="flex items-center gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/60 border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 18px -4px hsl(var(--primary) / 0.5)" }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/60 border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                          whileHover={{ scale: 1.1, boxShadow: "0 0 18px -4px hsl(var(--primary) / 0.5)" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="https://github.com/santoshbehera01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-primary to-fuchsia-500 text-primary-foreground font-semibold shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View All Projects
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;