import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Einstein Academy of Technology and Management (EATM)",
    location: "Bhubaneswar, Odisha",
    duration: "2024 – 2028",
    badge: "Current",
  },
  {
    title: "Intermediate in Science (P  C  M  IT)",
    institution: "Salandi Residential Higher Secondary School",
    location: "Bhadrak, Odisha",
    duration: "July 2022 – March 2024",
  },
  {
    title: "Matriculation",
    institution: "M.N High School",
    location: "Balasore, Odisha",
    duration: "May 2022",
    grade: "84.16%",
  },
];

const EducationSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={headerVariants} className="section-subtitle">— Education</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">Academic Background</motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-border origin-top"
            />

            <div className="space-y-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={cardVariants}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background"
                  />

                  <motion.div 
                    className="glass-card p-8"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-4 bg-primary/10 rounded-xl text-primary"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <GraduationCap className="w-8 h-8" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {edu.title}
                          </h3>
                          {edu.badge && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {edu.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-muted-foreground mb-3">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {edu.location}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-primary">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          {edu.grade && (
                            <div className="flex items-center gap-2 text-primary">
                              <Award className="w-4 h-4" />
                              <span className="font-medium">{edu.grade}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
