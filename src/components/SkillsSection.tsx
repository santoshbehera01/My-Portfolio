
import { motion, type Variants } from "framer-motion";

type Skill = {
  name: string;
  logo?: string;
  invert?: boolean;
  color?: string;
  customLogo?: boolean;
};

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const skills: { title: string; items: Skill[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", logo: devicon("python") },
      { name: "Java", logo: devicon("java") },
      { name: "C", logo: devicon("c") },
      { name: "JavaScript", logo: devicon("javascript") },
      { name: "TypeScript", logo: devicon("typescript") },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", logo: devicon("html5") },
      { name: "CSS", logo: devicon("css3") },
      { name: "React.js", logo: devicon("react") },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Firebase", logo: devicon("firebase") },
      { name: "Cloudflare Workers", logo: devicon("cloudflare") },
      { name: "REST API", customLogo: true, color: "#8B5CF6" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQLite", logo: devicon("sqlite") },
      { name: "MySQL", logo: devicon("mysql") },
      { name: "Firebase Firestore", logo: devicon("firebase") },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", logo: devicon("git") },
      { name: "GitHub", logo: devicon("github"), invert: true },
      { name: "VS Code", logo: devicon("vscode") },
      { name: "Vercel", logo: devicon("vercel"), invert: true },
      {
        name: "TiinyHost",
        logo: "https://tiiny.host/assets/logo.png",
      },
      {
        name: "Cloudinary",
        logo: "https://cdn.simpleicons.org/cloudinary/3448C5",
      },
    ],
  },
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const SkillLogo = ({ skill }: { skill: Skill }) => {
  if (skill.customLogo) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          fill={skill.color}
          fillOpacity="0.14"
        />
        <path
          d="M15 16h18M15 24h12M15 32h18"
          stroke={skill.color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="32" cy="24" r="3" fill={skill.color} />
      </svg>
    );
  }

  return (
    <img
      src={skill.logo}
      alt=""
      loading="lazy"
      className={`h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 ${
        skill.invert ? "brightness-0 invert" : ""
      }`}
    />
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-secondary/30 py-20 md:py-32"
    >
      {/* Subtle purple ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/5 blur-3xl"
      />

      <div className="container relative mx-auto px-5 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-14 text-center md:mb-16"
        >
          <motion.p
            variants={headerVariants}
            className="section-subtitle"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={headerVariants}
            className="section-title"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
          >
            Technologies I use to build modern, reliable, and impactful
            software solutions.
          </motion.p>

          <motion.div
            variants={headerVariants}
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
          />
        </motion.div>

        {/* Technology cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={containerVariants}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-violet-500/40 sm:p-6"
            >
              <h3 className="mb-5 text-lg font-semibold tracking-tight text-foreground">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/70 px-2 py-4 text-center transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.06] hover:shadow-[0_8px_24px_-16px_rgba(139,92,246,0.5)]"
                  >
                    <SkillLogo skill={skill} />

                    <span className="text-xs font-medium leading-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Areas of interest */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-violet-500/40 sm:p-6"
          >
            <h3 className="mb-6 text-lg font-semibold tracking-tight text-foreground">
              Areas of Interest
            </h3>

            <ul className="space-y-5">
              {areasOfInterest.map((interest) => (
                <motion.li
                  key={interest}
                  variants={skillVariants}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-base"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)] transition-transform duration-300 group-hover:scale-125" />
                  {interest}
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
