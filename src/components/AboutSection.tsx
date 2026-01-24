import { Code, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
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
          <div className="space-y-8">
            <div>
              <p className="section-subtitle">— About Me</p>
              <h2 className="section-title">
                Passionate about building
                <br />
                <span className="text-gradient">digital solutions</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi there! I'm <span className="text-foreground font-medium">Santosh Kumar Behera</span>, 
                a B.Tech CSE student with a strong interest in programming and 
                software development. I'm learning the basics of computer science 
                and coding, aiming to become a skilled Software Engineer.
              </p>
              <p>
                I enjoy exploring new technologies and always look for ways to 
                grow and improve. My journey in tech is driven by curiosity and 
                the desire to create meaningful solutions that make a difference.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="text-primary font-medium hover:underline inline-flex items-center gap-2"
              >
                Let's connect →
              </a>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
