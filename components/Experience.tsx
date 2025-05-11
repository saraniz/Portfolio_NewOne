import { useState } from "react";
import SectionTitle from "./SectionTitle";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Experience & Education" titleNo="02" />

      {/* Tab Navigation */}
      <div className="flex gap-6 mt-6">
        <button
          className={`pb-2 text-lg font-semibold ${
            activeTab === "experience" ? "text-textGreen" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`pb-2 text-lg font-semibold ${
            activeTab === "education" ? "text-textGreen" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Experience Section */}
      {activeTab === "experience" && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-textGreen">
            Volunteer Experience
          </h2>
          <ul className="mt-6">
            <li>
              <strong>Assistant Secretary</strong> at{" "}
              <strong>ACS, University of Sri Jayewardenepura</strong>
              <p className="text-sm mt-2">
                Jan 2023 – Present: Assist in organizing events, workshops, and
                meetings.
              </p>
            </li>
            <li className="mt-6">
              <strong>Secretary</strong> at <strong>IEEE Xtreme 17.0</strong>
              <p className="text-sm mt-2">
                Oct 2023: Contributed to organizing the IEEE Xtreme 17.0
                competition.
              </p>
            </li>
            <li className="mt-6">
              <strong>Member</strong> at <strong>IEEE</strong>
              <p className="text-sm mt-2">
                Sept 2024 – Present: Participate in IEEE meetings and workshops.
              </p>
            </li>
            <li className="mt-6">
              <strong>Designing and Marketing Team Member</strong> at{" "}
              <strong>Beauty of Cloud</strong>, organized by the CS Chapter,
              IEEE Student Branch, University of Sri Jayewardenepura
              <p className="text-sm mt-2">
                Apr 2025 – Present: Contributed to promotional designs, social
                media marketing, and outreach strategies.
              </p>
            </li>
          </ul>
        </div>
      )}

      {/* Education Section */}
      {activeTab === "education" && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-textGreen">Education</h2>
          <ul className="mt-6">
            <li>
              <strong>BComp.(Honours) in Software Engineering</strong> - University of Sri Jayewardenepura
              <p className="text-sm mt-2">
                2023 – Present: Studying software engineering principles and
                applications.
              </p>
            </li>

            <li className="mt-6">
              <strong>Ferguson High School</strong>
              <p className="text-sm mt-2">
                Completed my A/L studies in Combined Mathematics, Physics, & Chemistry.
              </p>
            </li>

            <li className="mt-6">
              <strong>Artificial Intelligence Fundamentals</strong> – IBM
              <p className="text-sm mt-2">
                Gained foundational knowledge in AI, including machine learning, neural networks, and real-world applications.
              </p>
            </li>

            <li className="mt-6">
              <strong>Introduction to Python</strong> – Sololearn
              <p className="text-sm mt-2">
                Learned Python basics, including syntax, loops, functions, and data structures through hands-on coding exercises.
              </p>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default ExperienceEducation;
