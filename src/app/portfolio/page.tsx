"use client";
import React from "react";
import ProjectComponent from "@/components/ProjectComponent";
import SpecializationComponent from "@/components/SpecializationComponent";
import ProjectsData from "@/data/ProjectsData.json";
import SpecData from "@/data/SpecializationData.json";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/ProfileData.json";

function Portfolio() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="pb-16 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center min-h-[calc(100vh-144px)]">
          {/* Sidebar (IntroCard placeholder, you can swap with your real component) */}
          <div className="w-full lg:w-80 lg:sticky lg:top-24 flex-shrink-0">
            <ProfileCard {...profileData} />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 max-w-4xl">
            <SpecializationComponent data={SpecData.Spec as Specialization[]} />
            <ProjectComponent data={ProjectsData.Projects as Project[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
