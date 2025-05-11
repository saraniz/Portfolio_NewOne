import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import kloset from '@/public/assets/kloset.png';
import my from '@/public/assets/my.png';
import todo from '@/public/assets/todo.png';

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">

        {/* ============ Project 1: Multivendor ============ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={kloset} alt="kloset" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">Multivendor Fashion E-commerce System</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Multivendor Fashion E-commerce System Group Project.
              A platform where multiple vendors can sell fashion items.
              Users can browse and purchase, while vendors can manage products and sales.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>React</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Supabase</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-textGreen duration-300" href="https://github.com/saraniz" target="_blank">
                <TbBrandGithub />
              </a>
              <a className="hover:text-textGreen duration-300" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ Project 2: ToDo App ============ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={todo} alt="todo" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">ToDo Web Application</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A feature-rich To-Do app for managing tasks efficiently.
              Add, edit, and track your daily activities with ease.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>React</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-textGreen duration-300" href="https://github.com/noorjsdivs" target="_blank">
                <TbBrandGithub />
              </a>
              <a className="hover:text-textGreen duration-300" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ Project 3: Portfolio ============ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a className="w-full xl:w-1/2 h-auto relative group" target="_blank">
            <div>
              <Image className="w-full h-full object-contain" src={my} alt="my" />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">My Portfolio Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A personal portfolio website built with HTML, CSS, and JavaScript to showcase projects, skills, and experience.
              It features a responsive design, smooth animations, and interactive elements.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a className="hover:text-textGreen duration-300" href="https://github.com/saraniz/My-Portfolio" target="_blank">
                <TbBrandGithub />
              </a>
              <a className="hover:text-textGreen duration-300" href="https://saraniz.github.io/My-Portfolio/" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
