import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "santosh@example.com",
      href: "mailto:santosh@example.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bhubaneswar, Odisha",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-fade-up ${headerVisible ? "visible" : ""}`}
        >
          <p className="section-subtitle">— Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto mt-4 text-reveal ${headerVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            Have a question or want to connect? Feel free to reach out. I'm
            always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <div className={`space-y-8 scroll-slide-left ${contentVisible ? "visible" : ""}`}>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 stagger-item ${contentVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary icon-hover">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`stagger-item ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all icon-hover stagger-item ${contentVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${350 + index * 50}ms` }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`glass-card p-8 space-y-6 scroll-slide-right ${contentVisible ? "visible" : ""}`}
          >
            <div className={`stagger-item ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div className={`stagger-item ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={`stagger-item ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-all"
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover-lift stagger-item ${contentVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
