
import { motion, type Variants } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
  color: string;
  label?: string;
};

const languages: Skill[] = [
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Java", icon: "openjdk", color: "#ED8B00", label: "Java" },
  { name: "C", icon: "c", color: "#A8B9CC" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
];

const frontend: Skill[] = [
  { name: "HTML", icon: "html5", color: "#E34F26" },
  { name: "CSS", icon: "css", color: "#663399" },
  { name: "React.js", icon: "react", color: "#61DAFB" },
];

const backend: Skill[] = [
  { name: "Firebase", icon: "firebase", color: "#DD2C00" },
  {
    name: "Cloudflare Workers",
    icon: "cloudflare",
    color: "#F38020",
  },
  {
    name: "REST API",
    icon: "fastapi",
    color: "#009688",
    label: "API",
  },
];

const database: Skill[] = [
  { name: "SQLite", icon: "sqlite", color: "#003B57" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  {
    name: "Firebase Firestore",
    icon: "firebase",
    color: "#FFCA28",
  },
];

const toolsAndPlatforms: Skill[] = [
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#F0F6FC" },
  { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
  { name: "Vercel", icon: "vercel", color: "#F0F6FC" },
  { name: "TiinyHost", icon: "googlechrome", color: "#4285F4", label: "TH" },
  { name: "Cloudinary", icon: "cloudinary", color: "#3448C5" },
];

const areasOfInterest = [
  "Artificial Intelligence",
  "Web Development",
  "Machine Learning",
  "Full Stack Development",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const iconUrl = (icon: string) =>
  `https://cdn.simpleicons.org/${icon}`;

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-xl border border-border/70 bg-background/60 p-4 text-center transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.04]"
  >
    <div className="flex h-9 w-9 items-center justify-center">
      <img
        src={iconUrl(skill.icon)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget
            .nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
        style={{
          filter:
            skill.color === "#F0F6FC" ||
            skill.color === "#A8B9CC"
              ? "none"
              : undefined,
        }}
      />
      <span
        style={{
          display: "none",
          color: skill.color,
        }}
        className="h-8 w-8 items-center justify-center rounded-lg border border-current/20 text-xs font-bold"
      >
        {skill.label ?? skill.name.slice(0, 2).toUpperCase()}
      </span>
    </div>

    <span className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-primary">
      {skill.name}
    </span>
  </motion.div>
);

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => (
  <motion.div
    variants={cardVariants}
    className="glass-card p-5 sm:p-6"
  >
    <h3 className="mb-5 text-lg font-bold text-foreground">
      {title}
    </h3>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-12 text-center md:mb-16"
        >
          <motion.p
            variants={cardVariants}
            className="section-subtitle"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={cardVariants}
            className="section-title"
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Technologies I use to build modern software solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={containerVariants}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <SkillCategory title="Programming Languages" skills={languages} />
          <SkillCategory title="Frontend Development" skills={frontend} />
          <SkillCategory title="Backend & APIs" skills={backend} />
          <SkillCategory title="Databases" skills={database} />
          <SkillCategory title="Tools & Platforms" skills={toolsAndPlatforms} />

          <motion.div
            variants={cardVariants}
            className="glass-card p-5 sm:p-6"
          >
            <h3 className="mb-5 text-lg font-bold text-foreground">
              Areas of Interest
            </h3>

            <ul className="space-y-4">
              {areasOfInterest.map((item) => (
                <motion.li
                  key={item}
                  variants={cardVariants}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
