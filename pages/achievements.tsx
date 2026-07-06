import React from "react";
import Head from "next/head";
import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";
import Achievements from "@/components/Achievements";

const AchievementsPage = () => {
  return (
    <>
      <Head>
        <title>Achievements & Certifications | Amie</title>
        <meta name="description" content="Milestones, Achievements, and Professional Certifications earned by Amandi Thathsarani" />
      </Head>

      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
        {/* Custom Clean Header */}
        <header className="w-full h-20 bg-bodyColor border-b border-textDark/10 sticky top-0 z-50 px-4 md:px-8 backdrop-blur-md bg-opacity-80">
          <div className="max-w-containerSmall h-full mx-auto flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-titleFont text-textGreen cursor-pointer select-none">Amie.</h1>
            </Link>
            <Link href="/">
              <span className="flex items-center gap-2 text-sm text-textDark hover:text-textGreen transition-colors duration-300 cursor-pointer font-titleFont">
                <TbArrowLeft className="text-base" /> Back to Home
              </span>
            </Link>
          </div>
        </header>

        {/* Render achievements directly */}
        <div className="py-12 sm:py-20">
          <Achievements />
        </div>
      </main>
    </>
  );
};

export default AchievementsPage;
