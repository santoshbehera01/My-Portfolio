import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 0.3
    }} className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={containerVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.p variants={itemVariants} className="section-subtitle">— Introduction</motion.p>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
                Santosh
                <br />
                <span className="text-gradient">Kumar</span>
                <br />
                Behera<span className="text-primary">.</span>
              </motion.h1>
            </div>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md">B.Tech CSE Student || Aspiring Software Engineer || Programming Enthusiast</motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground max-w-lg leading-relaxed">
              Passionate about software development and learning new
              technologies. Building the future, one line of code at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all" whileHover={{
              y: -3,
              boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)"
            }} whileTap={{
              scale: 0.98
            }}>
                View Projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-all" whileHover={{
              y: -3,
              boxShadow: "0 10px 20px -10px rgba(0,0,0,0.2)"
            }} whileTap={{
              scale: 0.98
            }}>
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              {[{
              href: "mailto:santoshkumar845788@gmail.com",
              icon: <Mail size={20} />,
              label: "Email"
            }, {
              href: "https://github.com/santoshbehera01",
              icon: <Github size={20} />,
              label: "GitHub"
            }, {
              href: "https://www.linkedin.com/in/santosh-kumar-behera-/",
              icon: <Linkedin size={20} />,
              label: "LinkedIn"
            }].map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.href} 
                  target={social.href.startsWith("mailto") ? undefined : "_blank"} 
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"} 
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={imageVariants} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background blur/gradient effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.2, delay: 0.3 }} 
                className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent rounded-[2.5rem] blur-3xl" 
              />
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }} 
                className="absolute -inset-4 bg-gradient-radial from-primary/20 to-transparent rounded-[2rem] blur-2xl" 
              />
              
              {/* Decorative elements - rounded rectangles */}
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.7 }} 
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-2xl rotate-12" 
              />
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.9 }} 
                className="absolute -bottom-3 -left-3 w-14 h-14 bg-primary/20 rounded-xl -rotate-12" 
              />

              {/* Profile Image - Modern Rounded Rectangle */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[28rem] rounded-[2rem] overflow-hidden border-[3px] border-primary/40 shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.4),0_0_60px_-20px_hsl(var(--primary)/0.3)]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-transparent via-transparent to-background/20" />
                <img 
                  src={profilePhoto} 
                  alt="Santosh Kumar Behera" 
                  className="w-full h-full object-cover object-[center_40%] scale-[1.1]" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;