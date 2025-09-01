"use client";
import React from "react";
import ProjectsComponent from "@/components/ProjectsComponent";
import SpecializationComponent from "@/components/SpecializationComponent";
import { ExternalLink, Award, Users, Globe, Code } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      name: "Align With Me",
      link: "https://alignwithme.example.com",
      photo: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      description:
        "AI platform for creating personalized user guides to enhance workplace collaboration.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
        "PropelAuth",
        "OpenAI",
      ],
    },
    {
      name: "Beyut",
      link: "https://beyut.example.com",
      photo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      description:
        "Zillow for Saudi Arabia's real estate market with advanced search capabilities.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Elasticsearch",
        "Mapbox",
      ],
    },
    {
      name: "HoopWorld",
      link: "https://hoopworld.example.com",
      photo: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      description:
        "AI platform for personalized basketball assessments and player development.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Tailwind",
        "OpenAI API",
        "Zod",
        "React Hook Form",
      ],
    },
    {
      name: "Dubizzle Clone",
      link: "https://dubizzle.example.com",
      photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      description:
        "Craigslist for the Middle East with advanced filtering and location services.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Elasticsearch",
        "Mapbox",
      ],
    },
    {
      name: "CarSpector",
      link: "https://carspector.example.com",
      photo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      description:
        "Car inspection service platform for buying used cars with confidence.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SCSS",
        "Stripe",
      ],
    },
    {
      name: "OLX Pakistan",
      link: "https://olx.example.com",
      photo: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      description:
        "Marketplace platform for Pakistan with advanced search and user management.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
    },
  ];

  // Specialization data
  const specializations = [
    {
      name: "Website Design",
      description:
        "I create digital products with unique ideas using Figma & Framer",
      metric: "24",
      icon: "🎨",
    },
    {
      name: "Development",
      description: "I build websites go live with Framer, Webflow or WordPress",
      metric: "128",
      icon: "💻",
    },
    {
      name: "SEO/Marketing",
      description:
        "Increase the traffic for your website with SEO optimized strategies",
      metric: "8",
      icon: "📈",
    },
  ];

  // Reasons to choose me
  const advantages = [
    {
      icon: <Award className="text-green-400" size={20} />,
      title: "5+ Years Experience",
      description: "Proven track record in full-stack development",
    },
    {
      icon: <Users className="text-green-400" size={20} />,
      title: "160+ Projects Delivered",
      description: "Successfully completed projects across various industries",
    },
    {
      icon: <Globe className="text-green-400" size={20} />,
      title: "Global Clientele",
      description: "Worked with clients from MENA, US, and Europe",
    },
    {
      icon: <Code className="text-green-400" size={20} />,
      title: "Modern Tech Stack",
      description: "Expert in React, Next.js, Node.js, and cloud technologies",
    },
  ];

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="min-h-screen bg-black text-white">
        {/* Geometric Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-green-500/20 rotate-45 animate-pulse" />
          <div
            className="absolute top-60 right-40 w-24 h-24 border border-blue-500/20 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-40 left-60 w-16 h-16 bg-green-500/10 rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="py-12 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-green-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge development work
            </p>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 lg:sticky lg:top-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-black">
                        D
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Drake
                    </h2>
                    <p className="text-green-400 text-sm sm:text-base mb-1">
                      Framer Designer & Developer
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Base in Los Angeles, CA
                    </p>

                    <button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-colors duration-300 text-sm sm:text-base">
                      📧 HIRE ME!
                    </button>
                  </div>

                  {/* Advantages */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                      Why Choose Me?
                    </h3>
                    {advantages.map((advantage, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors"
                      >
                        <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                          {advantage.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-white text-xs sm:text-sm">
                            {advantage.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="h-[500px] sm:h-[600px] lg:h-[800px] overflow-y-auto pr-2 sm:pr-4 space-y-8 sm:space-y-12 lg:space-y-16 custom-scrollbar">
                  {/* Projects Section */}
                  <ProjectsComponent projects={projects} />

                  {/* Specializations Section */}
                  <SpecializationComponent specializations={specializations} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1f2937;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(34, 197, 94, 0.5);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(34, 197, 94, 0.8);
          }
        `}</style>
      </div>
    </div>
  );
}

export default Portfolio;
