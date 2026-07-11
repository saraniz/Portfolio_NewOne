'use client';

import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link"; // Import Link for navigation

const RotatingTitles = () => {
  return (
    <span className="font-titleFont text-textDark mt-2 lgl:mt-8 text-2xl lgl:text-3xl">
      I&apos;m{" "}
      <span className="text-textGreen">
        <Typewriter
          words={["Software Engineer", "AI/ML Engineer", "Full-Stack Developer", "MLOps & DevOps Engineer", "Data Scientist"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000} // Wait time before deleting
        />
      </span>
    </span>
  );
};

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont flex flex-col"
      >
        Hey It&apos;s Amie.
        <RotatingTitles />
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium leading-relaxed"
      >
        I&apos;m a Software Engineering undergraduate specializing in building scalable full-stack applications, robust MLOps/DevOps pipelines, and AI/ML solutions. I combine modern web development (React, Node.js) with machine learning workflows (TensorFlow, Scikit-learn) and cloud deployment infrastructures (Docker, Kubernetes, AWS, Terraform) to build end-to-end intelligent systems.
      </motion.p>

      {/* Resume Link Button */}
      <a href="/assets/Amandi_Athukorala_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Resume
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
