import { motion, type Variants } from "framer-motion";

const SkillsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const languages = [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "TypeScript",
  ];

  const frontend = [
    "HTML",
    "CSS",
    "React.js",
  ];

  const backend = [
    "Firebase",
    "Cloudflare Workers",
    "REST API",
  ];

  const database = [
    "SQLite",
    "MySQL",
    "Firebase Firestore",
  ];

  const toolsAndPlatforms = [
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    "TiinyHost",
    "Cloudinary",
  ];

  const areasOfInterest = [
    "Artificial Intelligence",
    "Web Development",
    "Machine Learning",
    "Full Stack Development",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={headerVariants} className="section-subtitle">— Skills</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">What I Bring to the Table</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Languages */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Languages
            </h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
            >
              {languages.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Frontend
            </h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
            >
              {frontend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Backend
            </h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
            >
              {backend.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Database */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Database
            </h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
            >
              {database.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Tools & Platforms
            </h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
            >
              {toolsAndPlatforms.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8"
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Areas of Interest
            </h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
            >
              {areasOfInterest.map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;