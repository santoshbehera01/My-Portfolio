import {
  Users,
  Award,
  CheckCircle2,
  Briefcase,
  MapPin,
} from "lucide-react";
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

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const workExperience = [
    {
      company: "GeeksforGeeks",
      role: "Campus Mantri",
      location: "Remote",
      duration: "Jun 2026 – Present",
      points: [
        "Selected as Campus Mantri 2026, representing GeeksforGeeks on campus to promote learning opportunities and drive student engagement.",
        "Organized outreach activities, coding contests, and technical workshops to boost participation and awareness among peer communities.",
      ],
    },
    {
      company: "Codtech IT Solutions Private Limited",
      role: "Python Programming Intern",
      location: "Remote",
      duration: "Jun 2026 – Jul 2026",
      points: [
        "Completed a 6-week Python Programming internship, successfully delivering assigned tasks while demonstrating strong technical skills and dedication.",
      ],
    },
  ];

  const certifications = [
    "Participated in hackathons including GIET HackFest 2.0, BPUT Hackathon, and Adastra 2025",
    "Presented projects at INNOVISION 2026 and BPUT Project Exhibition 2025",
    "Completed a Bootcamp on Big Data & Data Science, CDAC Noida",
    "Completed the TestMu AI Bootcamp (in collaboration with GeeksforGeeks) on browser automation and AI agent infrastructure",
  ];

  const activities = [
    "Participated in hackathons and coding competitions",
    "Presented projects at project exhibitions focused on open innovation",
    "Active member of Bug Smashers (Coding Club)",
    "Organized and coordinated coding events and a college level tech-fest",
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

        {/* Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mb-10 space-y-6"
        >
          {workExperience.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              className="glass-card p-6 md:p-8 group"
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <Briefcase className="w-6 h-6" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {exp.company}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
                    <p className="text-sm italic text-primary font-medium">
                      {exp.role}
                    </p>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Activities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Certifications & Achievements */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Certifications & Achievements
              </h3>
            </div>

            <motion.ul
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
            >
              {certifications.map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Activities */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Activities
              </h3>
            </div>

            <motion.ul
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
            >
              {activities.map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;