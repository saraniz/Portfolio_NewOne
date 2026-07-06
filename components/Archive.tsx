import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  // All current and future projects go here
  const allProjects = [
    {
      title: "Movie Marketing Insights Dashboard",
      des: "An end-to-end data analytics system. Employs Python & Pandas for ETL preprocessing and deduplication of film viewing metrics, presenting interactive visualizations and marketing KPIs via Power BI.",
      listItem: ["Python", "Pandas", "Power BI", "Data Analytics", "ETL"],
      link: "https://github.com/saraniz/I-Movie-Dashboard",
    },
    {
      title: "PromptLab: LLM Prompt Evaluation",
      des: "A prompt engineering evaluation dashboard. Enables users to compare prompt styles side-by-side, query local LLM instances via Ollama, and score output response quality using an LLM-as-a-judge system.",
      listItem: ["Streamlit", "Ollama", "Python", "LLM Evaluation", "Prompt Engineering"],
      link: "https://github.com/saraniz/PromptLab-LLM-Prompt-Testing-Evaluation-Platform",
    },
    {
      title: "Cloud Native CI/CD Platform",
      des: "A cloud-native study tracker platform. Integrates Flask microservices, a React frontend, and a shared PostgreSQL instance, orchestrated with Docker, automated via GitHub Actions, and monitored with Prometheus and Grafana.",
      listItem: ["Kubernetes", "Docker", "Flask", "React", "Prometheus", "CI/CD"],
      link: "https://github.com/saraniz/cloud-native-ci-cd-platform",
    },
    {
      title: "Mood-Sync: AI-Powered Music Recommender",
      des: "A real-time facial expression recognition system (group project). Utilizes a custom CNN to detect 7 emotions through webcam feeds (via WebRTC) and recommends matching music directly on YouTube.",
      listItem: ["Computer Vision", "TensorFlow", "Streamlit", "WebRTC", "OpenCV"],
      link: "https://github.com/ImalshaSathsarani/music-recommender-using-face-emotions",
    },
    {
      title: "Smart Plant Doctor",
      des: "An AI-powered plant disease diagnostic system. Trains a CNN model with TensorFlow to identify 12 diseases, exposes inference through a FastAPI backend, and renders care remedies dynamically in Streamlit.",
      listItem: ["FastAPI", "Streamlit", "TensorFlow", "CNN", "Python"],
      link: "https://github.com/saraniz/Smart-Plant-Doctor",
    },
    {
      title: "Log Anomaly Detection System",
      des: "An end-to-end MLOps log monitoring platform. Employs an Isolation Forest model to flag anomalies, serving predictions via FastAPI, containerized with Docker, and deployed on AWS EC2 using Terraform IaC and GitHub Actions CI/CD.",
      listItem: ["Terraform", "AWS EC2", "Docker", "FastAPI", "Scikit-learn"],
      link: "https://github.com/saraniz/System-Log-Anomaly-Detection",
    },
    {
      title: "Fraud Detection ML on Kubernetes",
      des: "An end-to-end credit card fraud detection pipeline. Trains preprocessing & classification pipelines, stores artifacts in AWS S3, serves predictions via FastAPI, and deploys containerized instances to Minikube Kubernetes.",
      listItem: ["Kubernetes", "Docker", "FastAPI", "AWS S3", "Scikit-learn"],
      link: "https://github.com/saraniz/ML-k8s-deployment",
    },
    {
      title: "Nginx Load Balancer & Caching System",
      des: "A production-grade backend infrastructure. Employs Nginx as a reverse proxy, cache layer, and round-robin load balancer distributing client traffic across multiple Node.js/Express servers.",
      listItem: ["Nginx", "Node.js", "Express.js", "Load Balancing", "Caching"],
      link: "https://github.com/saraniz/NGINX-Practice-Project",
    },
    {
      title: "Dataset Drift Monitoring System",
      des: "A robust MLOps pipeline for customer churn prediction designed to detect and handle data distribution drift. Implements DVC pipeline stages, MLflow tracking on DagsHub, and GitHub Actions automated retraining.",
      listItem: ["MLOps", "DVC", "MLflow", "Python", "GitHub Actions"],
      link: "https://github.com/saraniz/Drift-Monitoring",
    },
    {
      title: "Linux System Automation & Monitoring",
      des: "A lightweight system observability pipeline. Employs a Bash script to harvest primary performance metrics and a Python psutil script to process and output structured system monitoring logs in JSONL format.",
      listItem: ["Linux", "Bash", "Python", "observability", "SSH"],
      link: "https://lnkd.in/gSgeu8xd",
    },
    {
      title: "Global Energy & Climate Impact Predictor",
      des: "An ML-powered platform that predicts primary energy consumption and CO2 emissions using historical country-level OWID data. Features clean lag ETL pipelines, model training, a FastAPI backend, and a Streamlit frontend packaged with Docker.",
      listItem: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "Docker"],
      link: "https://github.com/saraniz/Global-Climate-Energy-Consumption-Predictor",
    },
    {
      title: "Smart Loan Risk Prediction Pipeline",
      des: "An end-to-end machine learning pipeline for loan risk assessment. Trains classification models, tracks lifecycle experiments with MLflow, integrates DagsHub remote tracking, and registers models using MLflow Registry.",
      listItem: ["Python", "MLflow", "Scikit-learn", "XGBoost", "DagsHub"],
      link: "https://github.com/saraniz/Smart-Loan-Risk-Prediction-Pipeline",
    },
    {
      title: "Travel Mind Website",
      des: "Interactive travel-themed website that provides users with travel-related content, navigation, and booking interface elements. Built with modern web technologies to enhance user experience.",
      listItem: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/saraniz/Travel-Mind-Website",
    },
  ];

  // Show only the first 3 unless "showMore" is true
  const displayedProjects = showMore ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center justify-center text-center gap-2">
        <h2 className="text-3xl font-titleFont font-semibold text-textLight">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-mono text-textGreen">
          a collection of experimental builds & utilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 lgl:px-10">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              layout
            >
              <ArchiveCard
                title={project.title}
                des={project.des}
                listItem={project.listItem}
                link={project.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show button only if there are more than 3 projects */}
      {allProjects.length > 3 && (
        <div className="mt-12 flex justify-center items-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-36 h-12 rounded-md text-textGreen text-sm font-titleFont border border-textGreen hover:bg-hoverColor duration-300 transition-colors"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Archive;
