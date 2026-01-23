import { Rocket, BookOpen, Code2 } from "lucide-react";

const ServicesSection = () => {
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
        <div className="text-center mb-16">
          <p className="section-subtitle">— Services</p>
          <h2 className="section-title">What I'm Building Towards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Currently focused on learning and developing my skills to offer
            professional services in the future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 text-center hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                {service.status}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
