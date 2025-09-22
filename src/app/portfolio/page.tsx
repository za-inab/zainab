"use client";
import React from "react";
import ProjectComponent, { Project } from "@/components/ProjectComponent";
import SpecializationComponent, {
  Specialization,
} from "@/components/SpecializationComponent";
import ProjectsData from "@/data/ProjectsData.json";
import SpecData from "@/data/SpecializationData.json";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/ProfileData.json";

function Portfolio() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="min-h-screen bg-black relative w-[90%]">
        {/* The heading div */}
        <div className="text-center mb-12 mt-2">
          <p className="text-gray-400 mb-2">Look at my work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            My <span className="text-emerald-400">Portfolio</span>
            <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-emerald-500 animate-pulse rounded-full"></span>
          </h2>
        </div>

        {/* Main Container with proper spacing for navbar/footer */}
        <div className="pb-16 px-6 md:px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 gap-y-14 lg:gap-12 items-center lg:items-start justify-center min-h-[calc(100vh-144px)]">
            {/* Profile Card - Side positioned on desktop, top on mobile */}
            <div className="lg:sticky lg:top-24 flex-shrink-0 justify-items-center">
              <ProfileCard {...profileData} />
            </div>

            {/* Main Content - Scrollable timeline and skills */}
            <div className="flex-1 max-w-7xl justify-center items-center justify-items-center lg:justify-items-start w-full">
              {/* Timeline Section */}
              <div className="mb-20 w-full">
                <SpecializationComponent
                  data={SpecData.Spec as Specialization[]}
                />
              </div>

              {/* Skills Section */}
              <div className="text-center sm:text-left w-full">
                <ProjectComponent data={ProjectsData.Projects as Project[]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;