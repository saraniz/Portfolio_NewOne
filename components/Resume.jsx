"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle"; // Ensure the path is correct

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-bodyColor">
      <SectionTitle title="Experience & Education" titleNo="02" />

      {/* Tabs */}
      <div className="flex gap-6 mt-10 border-b border-gray-300">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-all duration-300 border-b-2 ${
              activeTab === tab
                ? "text-green-500 border-green-500"
                : "text-gray-500 border-transparent hover:text-green-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Experience Content */}
      {activeTab === "experience" && (
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-green-500">Assistant Secretary</h3>
            <p className="text-gray-700">ACS, University of Sri Jayewardenepura</p>
            <p className="text-sm text-gray-500 mt-1">Jan 2023 – Present: Assisted in organizing events, workshops, and meetings.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-500">Secretary</h3>
            <p className="text-gray-700">IEEE Xtreme 17.0</p>
            <p className="text-sm text-gray-500 mt-1">Oct 2023: Contributed to organizing the IEEE Xtreme 17.0 competition.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-500">Member</h3>
            <p className="text-gray-700">IEEE</p>
            <p className="text-sm text-gray-500 mt-1">Sept 2024 – Present: Participate in IEEE meetings and workshops.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-500">Designing and Marketing Team Member</h3>
            <p className="text-gray-700">Beauty of Cloud, CS Chapter, IEEE Student Branch, University of Sri Jayewardenepura</p>
            <p className="text-sm text-gray-500 mt-1">Apr 2025 – Present: Contributed to promotional designs, social media marketing, and outreach strategies.</p>
          </div>
        </div>
      )}

      {/* Education Content */}
      {activeTab === "education" && (
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-green-500">BComp.(Hons) in Software Engineering</h3>
            <p className="text-gray-700">University of Sri Jayewardenepura</p>
            <p className="text-sm text-gray-500 mt-1">2023 – Present: Studying software principles and real-world applications.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-500">Artificial Intelligence Fundamentals</h3>
            <p className="text-gray-700">IBM</p>
            <p className="text-sm text-gray-500 mt-1">Gained foundational knowledge in AI, including machine learning, neural networks, and real-world applications.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-500">Introduction to Python</h3>
            <p className="text-gray-700">Sololearn</p>
            <p className="text-sm text-gray-500 mt-1">Learned Python basics, including syntax, loops, functions, and data structures through hands-on coding exercises.</p>
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-green-500">About Me</h3>
        <p className="text-gray-700 mt-4">
          Hey there! I'm Amandi Thathsarani. I'm currently a third-year undergraduate at the University of Sri Jayewardenepura, pursuing a Bachelor of Computing (Honours) in Software Engineering. I'm particularly interested in web development, mobile development, UI/UX design, data science, and AI. I've learned the MERN stack (MongoDB, Express.js, React, Node.js) and am now diving into Python, Django, and Next.js to expand my full-stack development skills. In addition to my studies, I have a keen interest in video editing and article writing.
        </p>
        <p className="text-gray-700 mt-4">
          Outside of my studies, I actively participate in hackathons and volunteer for the Computer Societies at our university. Currently, I'm working on developing my personal achievement website to showcase my projects and milestones.
        </p>

        <h3 className="text-2xl font-bold text-green-500 mt-8">Technologies & Programming Languages</h3>
        <p className="text-gray-700 mt-4">
          JavaScript (ES6+), Next.js, React, Node.js, Java, Python, Express.js, MongoDB, Tailwindcss
        </p>
      </div>
    </section>
  );
};

export default ExperienceEducation;
