import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import profileData from "@/data/ProfileData.json";
import skillsData from "@/data/skills.json";
// Sample data - replace with your actual data

const timelineData = [
  {
    id: "1",
    type: "work" as const,
    period: "2020 - Present",
    title: "Framer Designer & Developer",
    organization: "Brunodee Agency",
  },
  {
    id: "2",
    type: "work" as const,
    period: "2020 - Present",
    title: "Front-End WordPress Developer",
    organization: "Envato Market",
  },
  {
    id: "3",
    type: "work" as const,
    period: "2013 - 2019",
    title: "Webflow Developer & Co-Founder",
    organization: "Designflow Studio",
  },
  {
    id: "4",
    type: "work" as const,
    period: "2013 - 2019",
    title: "Web Designer",
    organization: "Freelance",
  },
  {
    id: "5",
    type: "work" as const,
    period: "2013 - 2019",
    title: "Leader Team of Marketing",
    organization: "AHA Marketing Agency",
  },
  {
    id: "6",
    type: "education" as const,
    period: "2010 - 2013",
    title: "Bachelor Degree of Information Technology",
    organization: "US RMIT University",
  },
];

const ResumePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="min-h-screen bg-black relative">
        {/* Background geometric patterns */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-64 h-64 border border-gray-800/30 rounded-full hidden md:block" />
          <div className="absolute bottom-20 right-40 w-48 h-48 border border-gray-800/20 rounded-full hidden md:block" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-gray-800/25 rounded-full hidden lg:block" />
          <div className="absolute top-40 right-60 w-96 h-96 border border-gray-800/15 rounded-full hidden lg:block" />

          {/* Additional geometric lines */}
          <div className="absolute top-32 right-32 w-48 h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent rotate-45 hidden md:block" />
          <div className="absolute bottom-40 right-20 w-64 h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent -rotate-45 hidden md:block" />
        </div>

        {/* Main Container with proper spacing for navbar/footer */}
        <div className="pt-20 pb-16 px-4 md:px-8 relative z-10">
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
                <Timeline items={timelineData} />
              </div>

              {/* Skills Section */}
              <div className="mb-20">
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
