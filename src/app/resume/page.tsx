import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import profileData from "@/data/ProfileData.json";
import skillsData from "@/data/skills.json";
import timelineData from "@/data/timelineData.json";

const ResumePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="min-h-screen bg-black relative">
        {/* Main Container with proper spacing for navbar/footer */}
        <div className="text-center mb-12 mt-2">
          <p className="text-gray-400 mb-2">Checkout my resume</p>
          <h2 className="text-4xl font-bold relative inline-block">
            My <span className="text-emerald-400">Resume</span>
            {/* Animated underline */}
            <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-emerald-500 animate-pulse rounded-full"></span>
          </h2>
        </div>
        <div className="pb-16 px-4 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center min-h-[calc(100vh-144px)]">
            {/* Profile Card - Side positioned on desktop, top on mobile */}
            <div className="w-full lg:w-80 lg:sticky lg:top-24 flex-shrink-0">
              <ProfileCard {...profileData} />
            </div>

            {/* Main Content - Scrollable timeline and skills */}
            <div className="flex-1 max-w-4xl">
              {/* Timeline Section */}
              <div className="mb-20">
                <div className="mb-8 lg:mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-white">Education &</span>{" "}
                    <span className="text-emerald-400">Experience</span>
                  </h1>
                </div>
                <Timeline items={timelineData.data} />
              </div>

              {/* Skills Section */}
              <div>
                <Skills skills={skillsData.skills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
