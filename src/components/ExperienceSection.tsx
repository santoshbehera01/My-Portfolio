import { Trophy, Users, Lightbulb, Presentation } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const ExperienceSection = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const experiences = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Participation",
      description:
        "Participated in hackathons to learn new concepts while improving coding skills and teamwork.",
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
        "Worked on team projects to learn collaboration and communication skills.",
      year: "2024-25",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Actively learning and improving skills through practice and self-study.",
      year: "Ongoing",
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
          <motion.p variants={headerVariants} className="section-subtitle">— Experience & Activities</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">My Journey So Far</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              custom={index}
              className="glass-card p-6 group"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {exp.icon}
                </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
