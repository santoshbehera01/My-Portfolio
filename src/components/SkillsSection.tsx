const SkillsSection = () => {
  const programmingSkills = [
    { name: "C", level: 75 },
    { name: "Java", level: 70 },
    { name: "Python", level: 65 },
  ];

  const coreSkills = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Critical Thinking",
    "Time Management",
    "Adaptability",
  ];

  const learningFocus = [
    "Software Development",
    "Data Structures",
    "Algorithms",
    "Web Development",
    "Database Management",
    "Version Control (Git)",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">— Skills</p>
          <h2 className="section-title">What I Bring to the Table</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Programming Languages */}
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Programming Languages
            </h3>
            <div className="space-y-5">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-amber-glow rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Focus */}
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Currently Learning
            </h3>
            <ul className="space-y-3">
              {learningFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
