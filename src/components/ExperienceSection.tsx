import { Trophy, Users, Lightbulb, Presentation } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const ExperienceSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const experiences = [
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "BPUT Project Exhibition 2025",
      description:
        "Presented innovative software projects and demonstrated technical solutions at the BPUT Project Exhibition, strengthening project presentation and technical communication skills.",
      year: "2025",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "INNOVISION 2026",
      description:
        "Participated in innovation focused events and showcased project ideas, gaining valuable exposure to emerging technologies and real world problem solving.",
      year: "2026",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Participation",
      description:
        "Participated in major hackathons including HackFest 2.0, BPUT Hackathon, and Adastra 2025, gaining hands on experience in problem solving, teamwork, innovation, and rapid software development.",
      year: "2025",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Python Programming Internship",
      description:
        "Developed multiple desktop applications including Expense Tracker, To Do List Manager, Unit Converter Tool, and Automated File Organizer while applying software development best practices.",
      year: "2026",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={headerVariants}
            className="section-subtitle"
          >
            — Experience & Achievements
          </motion.p>

          <motion.h2
            variants={headerVariants}
            className="section-title"
          >
            Professional Journey
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              className="glass-card p-6 group"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  {exp.icon}
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-foreground">
                      {exp.title}
                    </h3>

                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;