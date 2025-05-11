'use client';

import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link"; // Import Link for navigation

const RotatingTitles = () => {
  return (
    <span className="font-serif text-textDark mt-2 lgl:mt-8 text-2xl lgl:text-3xl">
      I&apos;m{" "}
      <span className="text-textGreen">
        <Typewriter
          words={["Undergraduate", "Developer", "Software Engineer", "ML Engineer", "Data Scientist"]}
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
        className="text-4xl lgl:text-6xl font-title Font font-serif flex flex-col"
      >
        Hey It&apos;s Amie.
        <RotatingTitles />
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I&apos;m a Software Engineering undergraduate passionate about web development and machine learning. I&apos;m currently learning
        React, Node.js, Express, Java, and Python to build scalable and user-friendly applications.
        Always eager to explore new technologies and improve my skills!
      </motion.p>

      {/* Updated Link to About Section */}
      <Link href="#about"> {/* Use Link from Next.js */}
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          View More
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
