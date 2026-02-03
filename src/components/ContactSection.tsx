import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_wgmggbv";
const EMAILJS_TEMPLATE_ID = "template_x2epv96";
const EMAILJS_PUBLIC_KEY = "6x0vB_CmGErJWTDTj";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const headerVariants: Variants = {
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
  const leftVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  const rightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [{
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "santoshkumar845788@gmail.com",
    href: "mailto:santoshkumar845788@gmail.com"
  }, {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 77353 44162",
    href: "tel:+917735344162"
  }, {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Bhubaneswar, Odisha",
    href: null
  }];
  const socialLinks = [{
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:santoshkumar845788@gmail.com",
    label: "Email"
  }, {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/santoshbehera01",
    label: "GitHub"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/santosh-kumar-behera-/",
    label: "LinkedIn"
  }, {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/iam__santosh__/",
    label: "Instagram"
  }];
  return <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: false,
        amount: 0.3
      }} variants={containerVariants} className="text-center mb-16">
          <motion.p variants={headerVariants} className="section-subtitle">— Contact</motion.p>
          <motion.h2 variants={headerVariants} className="section-title">Get In Touch</motion.h2>
          <motion.p variants={headerVariants} className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a question or want to connect? Feel free to reach out. I'm
            always open to discussing new opportunities and ideas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={containerVariants} className="space-y-8">
            <motion.div variants={leftVariants} className="space-y-6">
              {contactInfo.map((item, index) => <motion.div key={item.label} variants={itemVariants} custom={index} className="flex items-center gap-4">
                  <motion.div className="p-3 bg-primary/10 rounded-lg text-primary" whileHover={{
                scale: 1.15
              }} transition={{
                type: "spring",
                stiffness: 400
              }}>
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.value}
                      </a> : <p className="text-foreground">{item.value}</p>}
                  </div>
                </motion.div>)}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map(social => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all" aria-label={social.label} whileHover={{
                scale: 1.15
              }} transition={{
                type: "spring",
                stiffness: 400
              }}>
                    {social.icon}
                  </motion.a>)}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={containerVariants} className="glass-card p-8 space-y-6">
            <motion.div variants={rightVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input type="text" id="name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all" placeholder="John Doe" required />
            </motion.div>

            <motion.div variants={rightVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <input type="email" id="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all" placeholder="john@example.com" required />
            </motion.div>

            <motion.div variants={rightVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea id="message" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} rows={4} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-all" placeholder="Your message here..." required />
            </motion.div>

            <motion.button 
              type="submit" 
              disabled={isLoading}
              variants={rightVariants} 
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
              whileHover={isLoading ? {} : {
                y: -3,
                boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)"
              }} 
              whileTap={isLoading ? {} : {
                scale: 0.98
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>;
};
export default ContactSection;