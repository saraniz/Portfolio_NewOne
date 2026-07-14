import React, { useState } from "react";
import { SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiKubernetes, SiMlflow, SiNumpy, SiPandas, SiFastapi, SiTailwindcss, SiLinux, SiGnubash, SiGo, SiPrisma, SiFigma, SiPostman } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills: Skill[] = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "K8s", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ];

  return (
    <section
      id="tech"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 flex flex-col gap-8 px-4"
    >
      <SectionTitle title="My Tech Stack" titleNo="02" />

      <div className="flex flex-col gap-2 text-center">
        {/* <p className="text-sm sm:text-base text-textDark font-medium max-w-[600px] mx-auto">
          Here are some of the programming languages, frameworks, databases, and developer tools I work with.
        </p> */}
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-[900px] mx-auto mt-4">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#112240] border border-textDark/10 transition-all duration-400 group cursor-default"
              style={{
                borderColor: isHovered ? `${skill.color}40` : "rgba(255,255,255,0.05)",
                transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                boxShadow: isHovered 
                  ? `0 16px 40px -8px ${skill.color}30, inset 0 1px 0 ${skill.color}20` 
                  : '0 4px 16px rgba(0,0,0,0.2)',
                background: isHovered 
                  ? `radial-gradient(circle at center, ${skill.color}15, #112240 80%)`
                  : '#112240',
              }}
            >
              {/* Glow ring */}
              <div 
                className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 60px ${skill.color}15`,
                }}
              />

              {/* Floating label - elegant tooltip */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#0A192F] text-textLight text-xs font-medium rounded-lg border border-textDark/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
                style={{
                  transform: isHovered ? 'translateX(-50%) translateY(-4px)' : 'translateX(-50%) translateY(0)',
                  borderColor: isHovered ? `${skill.color}30` : 'rgba(136, 146, 176, 0.1)',
                  boxShadow: isHovered ? `0 8px 24px ${skill.color}15` : 'none',
                }}
              >
                {skill.name}
                <div 
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0A192F]"
                  style={{
                    borderRight: `1px solid ${isHovered ? `${skill.color}30` : 'rgba(136, 146, 176, 0.1)'}`,
                    borderBottom: `1px solid ${isHovered ? `${skill.color}30` : 'rgba(136, 146, 176, 0.1)'}`,
                  }}
                />
              </div>

              {/* Icon */}
              <Icon
                className="text-3xl sm:text-4xl transition-all duration-400 group-hover:scale-110"
                style={{
                  color: skill.color,
                  filter: isHovered ? `drop-shadow(0 0 20px ${skill.color}40)` : 'none',
                }}
              />

              {/* Decorative bottom line */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full transition-all duration-400"
                style={{
                  width: isHovered ? '60%' : '20%',
                  background: isHovered 
                    ? `linear-gradient(90deg, transparent, ${skill.color}, transparent)` 
                    : 'rgba(255,255,255,0.1)',
                  opacity: isHovered ? 1 : 0.3,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="https://github.com/saraniz"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <button className="px-8 py-3.5 text-sm font-titleFont border border-textGreen/40 rounded-lg text-textGreen tracking-wide hover:bg-textGreen/10 transition-all duration-300 hover:border-textGreen/80 hover:shadow-lg hover:shadow-textGreen/5">
            <span className="flex items-center gap-2">
              Explore My GitHub
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default TechStack;