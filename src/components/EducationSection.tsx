import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">— Education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Education Card */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background" />

              <div className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        B.Tech in Computer Science and Engineering
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        Current
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-3">
                      Einstein Academy of Technology and Management (EATM)
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Bhubaneswar, Odisha
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">2024 – 2028</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
