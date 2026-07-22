import { Code, Lightbulb, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      description: "Proficient in Python, Java, and JavaScript/TypeScript, with hands-on experience building REST APIs using Flask.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures, Algorithms, and DBMS — currently applying these skills to AI and web development projects.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Campus Mantri at GeeksforGeeks and active member of Bug Smashers Coding Club, organizing coding events and technical workshops.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div>
              <motion.p variants={itemVariants} className="section-subtitle">
                — About Me
              </motion.p>
              <motion.h2 variants={itemVariants} className="section-title">
                Engineering solutions with
                <br />
                <span className="text-gradient">code and curiosity</span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Santosh Kumar Behera</span>, 
                a B.Tech Computer Science Engineering student building practical software solutions in AI and web development. 
                My work includes an AI Resume Analyzer and other full-stack projects, backed by a solid grounding in Data Structures, Algorithms, and Database Management.
              </p>
              <p>
                Beyond coursework, I compete in hackathons, present at project exhibitions, and serve as Campus Mantri at GeeksforGeeks — 
                where I organize coding contests and technical workshops for my peers. I'm currently deepening my skills in AI and full-stack development, 
                with the goal of contributing to production-grade software as a Software Engineer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href="#contact"
                className="text-primary font-medium hover:underline inline-flex items-center gap-2"
              >
                Let's connect →
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                custom={index}
                className="glass-card p-6 hover-lift"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg text-primary"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;