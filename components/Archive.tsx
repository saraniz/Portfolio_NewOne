import React, { useState } from "react";
import { motion } from "framer-motion";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  // All current and future projects go here
  const allProjects = [
    {
      title: "Travel Mind Website",
      des: "Interactive travel-themed website that provides users with travel-related content, navigation, and booking interface elements. Built with modern web technologies to enhance user experience.",
      listItem: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/saraniz/Travel-Mind-Website",
    },
    {
      title: "Modern Calculator",
      des: "A modern, browser-based calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations with a clean and user-friendly interface.",
      listItem: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/saraniz/JS-Calculator",
    },

    {
      title: "GUI-Based Calculator Using Java Swing",
      des: "This is a simple calculator application built using Java Swing (JFrame). It allows users to perform basic arithmetic operations.",
      listItem: ["Java (Swing & JFrame)"],
      link: "https://github.com/saraniz/Calculator_Jframe",
    },
    {
      title: "Temperature Converter Using Java Swing",
      des: "It allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin with an easy-to-use graphical user interface (GUI).",
      listItem: ["Java (Swing & JFrame)"],
      link: "https://github.com/saraniz/Labsheet_8/tree/main/pkg08",
    },
    {
      title: "Slide Puzzle Game Using JFrame",
      des: "This project is a classic NxN sliding puzzle game implemented in Java Swing (JFrame). It features a dynamic grid, shuffle function etc.",
      listItem: ["Java (Swing & JFrame)"],
      link: "https://drive.google.com/file/d/144yAGPHOlpogJSfsYiHZHLfGJJc9-vuI/view?usp=sharing",
    },
    {
      title: "Python Mini Games & LabSheets",
      des: "A collection of fun Python mini-games and lab exercises designed to practice fundamental programming concepts.",
      listItem: ["Python"],
      link: "https://github.com/saraniz/Python-Games",
    },

    // Future projects can be added here:
    // {
    //   title: "Another Project",
    //   des: "Description",
    //   listItem: ["Tech stack"],
    //   link: "link",
    // },
  ];

  // Show only the first 3 unless "showMore" is true
  const displayedProjects = showMore ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Java Swing Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {displayedProjects.map((project, index) => (
          <ArchiveCard
            key={index}
            title={project.title}
            des={project.des}
            listItem={project.listItem}
            link={project.link}
          />
        ))}
      </div>

      {/* Show button only if there are more than 3 projects */}
      {allProjects.length > 3 && (
        <div className="mt-12 flex justify-center items-center">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.1 }}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen"
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Archive;
