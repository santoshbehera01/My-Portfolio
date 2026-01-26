import { Rocket, BookOpen, Code2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Software Development",
      description:
        "Currently learning and building skills in software development. Focused on creating clean, efficient, and maintainable code.",
      status: "Learning",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Problem Solving",
      description:
        "Developing strong analytical and problem-solving skills through practice and academic projects.",
      status: "Developing",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Future Services",
      description:
        "As I grow, I aim to offer professional software development services, contributing to meaningful projects.",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={headerVariants} className="section-subtitle">— Services</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">What I'm Building Towards</motion.h2>
          <motion.p variants={headerVariants} className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Currently focused on learning and developing my skills to offer
            professional services in the future.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              custom={index}
              className="glass-card p-8 text-center group"
              whileHover={{ y: -8, boxShadow: "0 25px 50px -15px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.icon}
              </motion.div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                {service.status}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
