import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import my from "@/public/assets/my.png";
import todo from "@/public/assets/todo.png";
import leftly from "@/public/assets/leftly.jpg";
import trustspot from "@/public/assets/trustspot.png";
import weather from "@/public/assets/weather.png";
import spam from "@/public/assets/spame.png";
import red from "@/public/assets/red.png";
import innpix from "@/public/assets/innpix.png";

const Projects = () => {
  const projects = [
    {
      title: "Leftly - Surplus Food Ordering Website",
      description:
        "A surplus food ordering platform that connects consumers with local eateries to purchase delicious surplus meals at discounted prices. Helps reduce food waste while providing budget-friendly food options.",
      tech: ["Next.js", "TypeScript", "Express.js", "Node.js", "Neon", "Zustand", "Socket.io"],
      image: leftly,
      github: "https://github.com/saraniz/Surplus-Food---Leftly",
      live: "https://github.com/saraniz/Surplus-Food---Leftly",
      isReverse: false,
    },
    {
      title: "TrustSpot: Trustworthy Place Discovery Platform",
      description:
        "A microservices-based place discovery platform that helps users explore new locations and share trustworthy reviews. Features secure authentication, place management, ratings, and personalized dashboards for a reliable community-driven experience.",
      tech: ["Java 17", "Spring Boot", "Spring Data JPA", "H2 Database", "React", "TypeScript", "Zustand"],
      image: trustspot,
      github: "https://github.com/saraniz/TrustSpot-Trustworthy-Place-Discovery-Platform",
      live: "https://github.com/saraniz/TrustSpot-Trustworthy-Place-Discovery-Platform",
      isReverse: true,
    },
    {
      title: "ToDo Web Application",
      description:
        "A feature-rich To-Do application for managing daily tasks efficiently. Features a clean, distraction-free interface where users can quickly add, edit, and track their milestones.",
      tech: ["React", "JavaScript", "TailwindCSS", "Express.js", "MongoDB"],
      image: todo,
      github: "https://github.com/saraniz/To-Do-Web-App",
      live: "https://github.com/saraniz/To-Do-Web-App",
      isReverse: false,
    },
    {
      title: "Weather Prediction System",
      description:
        "An ML-powered weather forecasting dashboard built with Streamlit. Predicts temperature, humidity, pressure, and rain probability for Sri Lankan cities using live API-driven ETL pipelines and automated GitHub Actions model retraining.",
      tech: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "GitHub Actions"],
      image: weather,
      github: "https://github.com/saraniz/Weather-Prediction-System",
      live: "https://weather-prediction--system.streamlit.app/",
      isReverse: true,
    },
    {
      title: "SpamShield: AI Email Classifier",
      description:
        "An intelligent email classification dashboard (university group project) built with Streamlit. Uses an optimized Support Vector Machine (SVM) and NLP (TF-IDF) to detect spam, offering real-time confidence scores, batch CSV uploads, and keyword contribution insights.",
      tech: ["Streamlit", "Python", "Scikit-learn", "NLP (TF-IDF)", "SVM"],
      image: spam,
      github: "https://github.com/Nuhansa-Kodithuwakku/spam_detection",
      live: "https://spamshields.streamlit.app/",
      isReverse: false,
    },
    {
      title: "Red Alert: Emergency Blood Donation App",
      description:
        "A mobile application (university group project) designed to streamline blood donation and emergency response. Connects donors, hospitals, and community members in real-time. Features eligibility checklists, geolocation alerts, and an administrative portal.",
      tech: ["React Native", "Express.js", "MongoDB", "Node.js"],
      image: red,
      github: "https://github.com/ImalshaSathsarani/RedAlert",
      live: "https://red-alert-zeta.vercel.app/",
      isReverse: true,
    },
    {
      title: "SafeHer: Women's Safety & Wellbeing UI/UX",
      description:
        "A comprehensive mobile UI/UX design project (university group project) focused on enhancing women's personal safety and wellness. Integrates real-time threat intelligence alerts, health metrics, and a community support network designed for accessibility and comfort.",
      tech: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Prototyping"],
      image: innpix,
      github: "",
      live: "https://www.figma.com/design/d3TFsYICARj5Nazl2hG1l0/Inpix_SafeHer-Prototype?node-id=0-1&p=f&t=RFMFEIdh3ESTy0QU-0",
      isReverse: false,
    },
  ];

  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24 px-4">
      <SectionTitle title="Some Things I have Built" titleNo="04" />

      <div className="w-full flex flex-col gap-10 mt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-2xl bg-[#112240]/25 border border-textDark/10 hover:border-textGreen/30 hover:shadow-[0_10px_35px_-5px_rgba(100,255,218,0.06)] hover:-translate-y-1.5 transition-all duration-300 group ${
              project.isReverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image Wrapper */}
            <a
              className="w-full lg:w-1/2 h-[220px] sm:h-[280px] relative overflow-hidden rounded-xl bg-[#112240]/40 border border-textDark/10 group-hover:border-textGreen/20 transition-all duration-300"
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute w-full h-full bg-bodyColor/20 group-hover:bg-transparent duration-300 top-0 left-0"></div>
            </a>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div>
                <span className="font-titleFont text-textGreen text-xs tracking-wider font-semibold uppercase">
                  Featured Project
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-textLight mt-1 group-hover:text-textGreen transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description Content */}
              <p className="text-sm sm:text-base text-textDark leading-relaxed">
                {project.description}
              </p>

              {/* Tech Badges */}
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-[#112240]/40 rounded-full border border-textDark/10 text-xs font-mono text-textGreen font-semibold hover:border-textGreen/30 transition-all cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="text-xl flex gap-4 text-textLight mt-2">
                <a
                  className="hover:text-textGreen hover:-translate-y-0.5 transition-all duration-300"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                >
                  <TbBrandGithub />
                </a>
                {project.live && (
                  <a
                    className="hover:text-textGreen hover:-translate-y-0.5 transition-all duration-300"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <RxOpenInNewWindow />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
