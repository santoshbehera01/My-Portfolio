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
      description: "Interested in coding and improving programming skills",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning",
      description: "Exploring new technologies and improving skills step by step",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Comfortable working in a team and sharing ideas",
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
                Passionate about building
                <br />
                <span className="text-gradient">digital solutions</span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi there! I'm <span className="text-foreground font-medium">Santosh Kumar Behera</span>, 
                a B.Tech-Computer Science student focused on building impactful software solutions and exploring modern technologies.
                I enjoy developing real world projects in AI and web development, with hands on experience in applications such as an AI Resume Analyzer and other development focused projects.
              </p>
              <p>I actively participate in technical events and project exhibitions to strengthen my technical, analytical, and problem solving skills.
                Driven by continuous learning and innovation, I am always eager to explore new technologies, work on meaningful projects, and grow as a future Software Engineer.
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
