import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
    {
      role: "Assistant Secretary",
      organization: "ACS, University of Sri Jayewardenepura",
      period: "Apr 2024 – Jun 2025",
      description: "Assist in organizing events, workshops, and meetings.",
    },
    {
      role: "Secretary",
      organization: "IEEE Xtreme 17.0",
      period: "Oct 2023",
      description: "Contributed to organizing the IEEE Xtreme 17.0 competition.",
    },
    {
      role: "Member",
      organization: "IEEE",
      period: "Sept 2024 – Present",
      description: "Participate in IEEE meetings and workshops.",
    },
    {
      role: "Designing and Marketing Team Member",
      organization: "Beauty of Cloud, organized by IEEE USJP CS Chapter",
      period: "Apr 2025 – Oct 2025",
      description: "Contributed to promotional designs, social media marketing, and outreach strategies.",
    },
  ];

  const educationData = [
    {
      role: "BComp.(Honours) in Software Engineering",
      organization: "University of Sri Jayewardenepura",
      period: "2023 – Present",
      description: "Studying software engineering principles and applications.",
    },
    {
      role: "Ferguson High School",
      organization: "Advanced Level Examination",
      period: "Completed",
      description: "Completed my A/L studies in Combined Mathematics, Physics, & Chemistry.",
    },
  ];

  return (
    <section id="experience" className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Experience & Education" titleNo="03" />

      {/* Elegant Centered Tab Navigation */}
      <div className="flex justify-center mt-10 mb-12">
        <div className="relative bg-[#112240] p-1.5 rounded-2xl border border-textDark/10 shadow-xl max-w-[360px] w-full">
          <div className="relative flex">
            {/* Animated Sliding Background */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-textGreen/10 border border-textGreen/20"
              layoutId="activeTab"
              transition={{ type: "spring", duration: 0.5 }}
              style={{
                width: "50%",
                left: activeTab === "experience" ? "1.5%" : "50.5%",
              }}
            />
            
            <button
              className={`relative flex-1 py-3 px-4 text-sm font-semibold rounded-xl z-10 transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "experience"
                  ? "text-textGreen"
                  : "text-textDark hover:text-textLight"
              }`}
              onClick={() => setActiveTab("experience")}
            >
              <FaBriefcase className={activeTab === "experience" ? "text-textGreen" : "text-textDark"} />
              Experience
            </button>
            <button
              className={`relative flex-1 py-3 px-4 text-sm font-semibold rounded-xl z-10 transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "education"
                  ? "text-textGreen"
                  : "text-textDark hover:text-textLight"
              }`}
              onClick={() => setActiveTab("education")}
            >
              <FaGraduationCap className={activeTab === "education" ? "text-textGreen" : "text-textDark"} />
              Education
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Section - Centered with elegant styling */}
      <div className="max-w-3xl mx-auto mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Centered timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-textGreen/20 via-textGreen/40 to-textGreen/20" />
              
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group"
                  >
                    {/* Timeline Node - Centered on desktop */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 z-10">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-bodyColor border-2 border-textGreen group-hover:bg-textGreen group-hover:scale-150 transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.3)]" />
                        {/* Pulsing ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-textGreen/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>

                    {/* Card - Alternating sides on desktop */}
                    <div className={`w-full md:w-[calc(50%-20px)] ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0' : 'md:pl-8 md:ml-auto'
                    }`}>
                      <div className="p-6 rounded-2xl bg-[#112240]/60 border border-textDark/10 hover:border-textGreen/30 hover:bg-[#112240]/80 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(100,255,218,0.05)] transition-all duration-300">
                        {/* Mobile timeline dot */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 rounded-full bg-textGreen shadow-[0_0_10px_rgba(100,255,218,0.4)] flex-shrink-0" />
                          <span className="text-xs font-mono text-textDark bg-bodyColor/50 px-3 py-1 rounded-full border border-textDark/10">
                            {item.period}
                          </span>
                        </div>

                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                          <h3 className="text-lg md:text-xl font-bold text-textLight group-hover:text-textGreen transition-colors duration-300 flex items-center gap-2">
                            <span className="md:hidden text-textGreen">▸</span>
                            {item.role}
                          </h3>
                          
                          <div className={`flex items-center gap-2 mt-1 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <FaBuilding className="text-textGreen/50 text-xs hidden md:block" />
                            <span className="text-sm font-semibold text-textGreen">
                              {item.organization}
                            </span>
                          </div>
                          
                          <p className="text-sm text-textDark mt-3 leading-relaxed max-w-md ${index % 2 === 0 ? 'md:text-right' : ''}">
                            {item.description}
                          </p>

                          {/* Desktop period badge */}
                          <div className="hidden md:flex items-center gap-2 mt-3">
                            <FaCalendarAlt className="text-textGreen/50 text-xs" />
                            <span className="text-xs font-mono text-textDark bg-bodyColor/50 px-3 py-1 rounded-full border border-textDark/10">
                              {item.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline connector line for mobile */}
                    {index < experienceData.length - 1 && (
                      <div className="md:hidden absolute left-4 top-10 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-textGreen/20 via-textGreen/30 to-textGreen/20" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Centered timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-textGreen/20 via-textGreen/40 to-textGreen/20" />
              
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group"
                  >
                    {/* Timeline Node - Centered on desktop */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 z-10">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-bodyColor border-2 border-textGreen group-hover:bg-textGreen group-hover:scale-150 transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.3)]" />
                        <div className="absolute inset-0 rounded-full border-2 border-textGreen/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>

                    {/* Card - Alternating sides on desktop */}
                    <div className={`w-full md:w-[calc(50%-20px)] ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0' : 'md:pl-8 md:ml-auto'
                    }`}>
                      <div className="p-6 rounded-2xl bg-[#112240]/60 border border-textDark/10 hover:border-textGreen/30 hover:bg-[#112240]/80 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(100,255,218,0.05)] transition-all duration-300">
                        {/* Mobile timeline dot */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 rounded-full bg-textGreen shadow-[0_0_10px_rgba(100,255,218,0.4)] flex-shrink-0" />
                          <span className="text-xs font-mono text-textDark bg-bodyColor/50 px-3 py-1 rounded-full border border-textDark/10">
                            {item.period}
                          </span>
                        </div>

                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                          <h3 className="text-lg md:text-xl font-bold text-textLight group-hover:text-textGreen transition-colors duration-300 flex items-center gap-2">
                            <span className="md:hidden text-textGreen">▸</span>
                            {item.role}
                          </h3>
                          
                          <div className={`flex items-center gap-2 mt-1 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <FaBuilding className="text-textGreen/50 text-xs hidden md:block" />
                            <span className="text-sm font-semibold text-textGreen">
                              {item.organization}
                            </span>
                          </div>
                          
                          <p className="text-sm text-textDark mt-3 leading-relaxed max-w-md ${index % 2 === 0 ? 'md:text-right' : ''}">
                            {item.description}
                          </p>

                          {/* Desktop period badge */}
                          <div className="hidden md:flex items-center gap-2 mt-3">
                            <FaCalendarAlt className="text-textGreen/50 text-xs" />
                            <span className="text-xs font-mono text-textDark bg-bodyColor/50 px-3 py-1 rounded-full border border-textDark/10">
                              {item.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline connector line for mobile */}
                    {index < educationData.length - 1 && (
                      <div className="md:hidden absolute left-4 top-10 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-textGreen/20 via-textGreen/30 to-textGreen/20" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceEducation;