import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
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
            Hey there! I&apos;m Amandi Thathsarani. I am currently a third-year undergraduate at the University of Sri Jayewardenepura, 
            pursuing a Bachelor of Computing (Honours) in Software Engineering. I&apos;m particularly interested in web development, mobile development, UI/UX design, data science, and AI. I&apos;ve learned the MERN stack (MongoDB, Express.js, React, Node.js) 
            and am now diving into Python, Django, and Next.js to expand my full-stack development skills. 
            In addition to my studies, I have a keen interest in video editing and article writing.
          </p>
          <p>
            Outside of my studies, I actively participate in hackathons and volunteer for the Computer Societies at our university. 
            Currently, I&apos;m working on developing my personal achievement website to showcase my projects and milestones.
          </p>
          <p>Here are a few technologies and Programming Languages I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
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
