import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import me from "@/public/assets/me2.png";


const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hey there! I&apos;m Amandi Thathsarani, a final-year undergraduate pursuing a Bachelor of Computing (Honours) in Software Engineering at the University of Sri Jayewardenepura. I am passionate about building intelligent software systems and am working toward becoming an AI/ML Engineer or Software Engineer.
          </p>
          <p>
           I enjoy developing practical, real-world applications that solve meaningful problems. My project experience includes building digital solutions aimed at reducing food waste, reflecting my interest in using technology to create positive social impact. I have hands-on experience in full-stack development, working with technologies including React, React Native, Next.js, Node.js, Express, Spring Boot, Tailwind CSS, Redux, and Zustand. My programming background includes Java, Python, JavaScript and Go.
          </p>
          <p>
           My primary interests are in Artificial Intelligence, Machine Learning, MLOps, and DevOps, with a strong focus on building scalable, production-ready ML systems by combining software engineering, data engineering, and automation practices. I am actively learning and developing projects involving CI/CD pipelines, model deployment, experiment tracking, model monitoring, and cloud-native architectures to strengthen my practical experience. I am currently seeking internship opportunities where I can contribute, learn, and grow in AI/ML Engineering, MLOps, DevOps, or Full-Stack Development while continuously expanding my technical expertise and building impactful, reliable, and scalable software solutions.
          </p>
      
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={me}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
