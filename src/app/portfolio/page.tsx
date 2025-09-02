"use client";
import React from "react";
import ProjectComponent from "@/components/ProjectComponent";
import SpecializationComponent from "@/components/SpecializationComponent";
import { ExternalLink, Award, Users, Globe, Code } from "lucide-react";
import ProjectsData from "@/data/ProjectsData.json";
import SpecData from "@/data/SpecializationData.json";

function Portfolio() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col md:flex-row mt-39 mx-20">
        {/* Sidebar (IntroCard placeholder, you can swap with your real component) */}
        <aside className="w-full md:w-1/3 lg:w-1/4 p-4 sticky top-24 h-screen">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-white">
            Intro Card Goes Here
          </div>
        </aside>

        {/* Scrollable Content */}
        <main className="w-full md:w-2/3 lg:w-3/4 p-6 space-y-16 overflow-y-auto">
          <SpecializationComponent data={SpecData.Spec as Specialization[]} />
          <ProjectComponent data={ProjectsData.Projects as Project[]} />
        </main>
      </div>
    </div>
  );
}

export default Portfolio;
