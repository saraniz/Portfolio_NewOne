import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TbAward, TbCertificate } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import me from "@/public/assets/me.jpg";
import codefuse from "@/public/assets/codefuse.jpg";
import code from "@/public/assets/code.jpg";
import artemia from "@/public/assets/artemia.jpg";
import redalert from "@/public/assets/redalert.jpg";
import wso from "@/public/assets/wso.jpg";
import bash from "@/public/assets/bash.jpg";
import cisco from "@/public/assets/cisco.jpg";
import linux from "@/public/assets/linux.jpg";
import deeplearning from "@/public/assets/deeplearning.jpg";
import rest from "@/public/assets/rest.jpg";
import aws from "@/public/assets/aws.jpg";
import github from "@/public/assets/github.png";
import mlops from "@/public/assets/mlops.png";

// Trophy SVG Illustration (Rendered if no custom image is set)
const TrophyIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-textGreen opacity-85 group-hover:scale-105 transition-transform duration-300 z-10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M35 25 H65 V45 C65 55 58 60 50 60 C42 60 35 55 35 45 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 60 V75 H55 V60 M38 75 H62 V80 H38 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 30 H28 V40 C28 45 35 45 35 45 M65 30 H72 V40 C72 45 65 45 65 45" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 20 L24 23 L27 24 L24 25 L22 28 L20 25 L17 24 L20 23 Z" fill="currentColor" stroke="none" className="animate-pulse" />
    <path d="M78 18 L79 20 L81 21 L79 22 L78 24 L77 22 L75 21 L77 20 Z" fill="currentColor" stroke="none" className="animate-pulse delay-75" />
  </svg>
);

// Certificate SVG Illustration (Rendered if no custom image is set)
const CertificateIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-textGreen opacity-85 group-hover:scale-105 transition-transform duration-300 z-10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="25" y="15" width="50" height="70" rx="4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="35" y1="30" x2="65" y2="30" strokeLinecap="round" />
    <line x1="35" y1="40" x2="65" y2="40" strokeLinecap="round" />
    <line x1="35" y1="50" x2="55" y2="50" strokeLinecap="round" />
    <circle cx="50" cy="68" r="8" fill="none" strokeWidth="1.5" />
    <path d="M47 75 L45 83 L50 80 L55 83 L53 75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Milestone {
  title: string;
  event: string;
  date: string;
  description: string;
  link: string;
  image?: any; // StaticImageData or string
}

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  const achievements: Milestone[] = [
    {
      title: "JCOS 2026 • 2026",
      event: "1st Jayewardenepura Computing Symposium (JCOS) 2026 – Research Publication & Presentation",
      date: "May 2026",
      description: "Published and presented the research paper 'Explainable Multi-Objective and Energy-Aware Sequence-Based Automated Refactoring in Open-Source Java: A Systematic Review' at the 1st Jayewardenepura Computing Symposium (JCOS) 2026, held at the University of Sri Jayewardenepura.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7463491229675130880/",
      image: me,
    },
    {
      title: "CODEFUSE 2.0 • Association of Computing Students, University of Sri Jayewardenepura",
      event: "Intra Faculty Hackathon",
      date: "April 2025",
      description: "Participated in a competitive hackathon focused on solving algorithmic and real-world problem statements under strict time constraints, strengthening problem-solving and coding efficiency skills.",
      link: "https://www.linkedin.com/posts/amandi-athukorala-517aa12b6_i-had-the-privilege-of-participating-in-codefuse-activity-7399376707054604288-4bcg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv6y6MBoWtCz6BfjpMBrsqqeMWIJg5QyMA",
      image: code,
    },
    {
      title: "Artemia 1.0 Finalists • IEEE USJ WIE SBAG",
      event: "UI/UX Design Challenge",
      date: "2025",
      description: "Team InPix reached the finals of Artemia 1.0, a UI/UX design challenge powered by IEEE USJ WIE SBAG. The experience strengthened collaboration, design thinking, and creative problem-solving in a competitive environment.",
      link: "https://www.linkedin.com/posts/amandi-athukorala-517aa12b6_introducing-safeher-the-uiux-project-our-activity-7399374161372057600-_7JF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv6y6MBoWtCz6BfjpMBrsqqeMWIJg5QyMA",
      image: artemia,
    },
    {
      title: "Idealize 2025 Semi-Finalists • AIESEC University of Moratuwa",
      event: "Innovation & Entrepreneurship Competition",
      date: "2025",
      description: "Team Simple Devs reached the semi-finals of Idealize 2025 for the project RedAlert, a smart blood donor discovery platform designed to connect urgent blood requests with available donors using technology to improve accessibility and response time.",
      link: "https://www.linkedin.com/posts/amandi-athukorala-517aa12b6_throwback-to-our-achievement-our-team-activity-7399386169236557824-QoIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv6y6MBoWtCz6BfjpMBrsqqeMWIJg5QyMA",
      image: redalert,
    },
    {
      title: "WSO2 Hacktoberfest 2025 • First Open Source Contribution",
      event: "Hacktoberfest Open Source Program",
      date: "2025",
      description: "Participated in WSO2 Hacktoberfest 2025 and made my first open-source contribution. Gained hands-on experience in real-world software development, API management, and collaborative coding through industry-level projects.",
      link: "https://github.com/openchoreo/openchoreo/pull/508",
      image: wso,
    },
  ];

  const certifications: Milestone[] = [
    {
      title: "Intermediate Shell Scripting with Bash",
      event: "CodeSignal Certification",
      date: "January 02, 2026",
      description: "Verified proficiency in shell scripting, CLI automation workflows, control structures, and environment management configurations.",
      link: "https://codesignal.com/learn/certificates/cm8o3tk2x0004cgybr62sgzxr/courses/559",
      image: bash,
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      event: "DeepLearning.AI & Stanford Online",
      date: "September 27, 2025",
      description: "Completed supervised ML concepts, linear/logistic regression models, cost optimization, gradient descent, and classification parameters under instruction by Andrew Ng.",
      link: "https://www.coursera.org/account/accomplishments/verify/TFG3KQ89QN3H",
      image: deeplearning,
    },
    {
      title: "Introduction to Linux (LFS101)",
      event: "The Linux Foundation",
      date: "September 16, 2025",
      description: "Comprehensive training covering Linux file systems navigation, command line scripting, package management, and system administration basics.",
      link: "https://www.credly.com/badges/8e80dfea-8fab-4267-9283-50121377f048/public_url",
      image: linux,
    },
    {
      title: "Industrial Networking Essentials",
      event: "Cisco Networking Academy",
      date: "October 21, 2025",
      description: "Gained certified competencies in industrial networking models, basic routing/switching, field operations, and operational security.",
      link: "https://www.credly.com/badges/6bd93b17-926d-409a-9f5a-8ed3b5e2d9f5/public_url",
      image: cisco,
    },
    {
      title: "Learning REST APIs",
      event: "LinkedIn Learning Certification",
      date: "April 19, 2026",
      description: "Verified expertise in designing, building, documenting, consuming, and securing production-grade RESTful API endpoints.",
      link: "https://www.linkedin.com/learning/certificates/03d3566858a54ae437626e4c360a0f193d5265ea1960061ca7fdc375940d6ea7?trk=share_certificate",
      image: rest,
    },
    {
      title: "AWS Cloud Practitioner Cert Prep",
      event: "Amazon Web Services Training",
      date: "In Progress",
      description: "Learning AWS global infrastructure model, primary EC2/S3 resources, VPC setups, core security groups, and cloud pricing strategies.",
      link: "https://www.linkedin.com/learning/certificates/d96cd3fdcd1b22662bc2f6e63b01596afbd1a81689beaa9f2c84cd924e36195f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bjb0FWSAZTLWiwg%2FUvQK7rQ%3D%3D",
      image: aws,
    },
    {
      title: "GitHub Actions Certification",
      event: "KodeKloud Certification",
      date: "February 15, 2026",
      description: "Successfully completed KodeKloud's GitHub Actions certification, demonstrating proficiency in CI/CD workflow automation, trigger events, job orchestrations, and secrets management.",
      link: "https://learn.kodekloud.com/user/certificate/655fbebb-a2d0-4536-9a91-4b7bd283e78c",
      image: github,
    },
    {
      title: "Fundamentals of MLOps",
      event: "KodeKloud Certification",
      date: "February 15, 2026",
      description: "Completed comprehensive MLOps training, gaining foundational knowledge in machine learning deployment automation, model testing, monitoring pipelines, and model registry systems.",
      link: "https://learn.kodekloud.com/user/certificate/f2062144-df8f-409c-9ab8-97ec0593e2af",
      image: mlops,
    },
  ];

  const displayedList = activeTab === "achievements" ? achievements : certifications;

  return (
    <section
      id="achievements"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-4"
    >
      <SectionTitle title="Achievements & Certifications" titleNo="05" />

      {/* Sliding Pill Tab Switcher */}
      <div className="flex relative justify-center items-center bg-[#112240] p-1 rounded-xl w-[320px] mr-auto ml-0 border border-textDark/10 mt-2">
        <button
          className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg z-10 transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === "achievements"
              ? "text-bodyColor bg-textGreen font-bold shadow-md"
              : "text-textDark hover:text-textLight"
          }`}
          onClick={() => setActiveTab("achievements")}
        >
          <TbAward className="text-lg" /> Achievements
        </button>
        <button
          className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg z-10 transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === "certifications"
              ? "text-bodyColor bg-textGreen font-bold shadow-md"
              : "text-textDark hover:text-textLight"
          }`}
          onClick={() => setActiveTab("certifications")}
        >
          <TbCertificate className="text-lg" /> Certifications
        </button>
      </div>

      {/* Grid View of Milestone Cards */}
      <div className="w-full mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {displayedList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col rounded-2xl bg-[#112240]/25 border border-textDark/10 hover:border-textGreen/30 hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.06)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
              >
                {/* Header Image or SVG Illustration */}
                <div className="w-full h-44 relative overflow-hidden border-b border-textDark/10 bg-[#112240]/40 flex items-center justify-center group-hover:bg-[#112240]/65 transition-colors duration-300">
                  {item.image ? (
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8892b0_1px,transparent_1px),linear-gradient(to_bottom,#8892b0_1px,transparent_1px)] bg-[size:14px_24px]" />
                      {activeTab === "achievements" ? <TrophyIllustration /> : <CertificateIllustration />}
                    </>
                  )}
                </div>

                {/* Metadata Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono font-semibold text-textGreen">
                      {item.event} • {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-textLight group-hover:text-textGreen transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-textDark mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2"
                  >
                    <button className="w-full py-2.5 rounded-lg border border-textGreen text-textGreen hover:bg-hoverColor transition-colors duration-300 font-titleFont text-xs font-semibold tracking-wide">
                      Verify Credential
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;
