import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

const ProjectsComponent = ({ projects }) => {
  return (
    <section>
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
          Featured <span className="text-green-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A collection of my recent work and achievements
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group"
          >
            {/* Image Container with Pop-out Effect */}
            <div className="relative overflow-hidden bg-gray-800">
              <Image
                src={project.photo}
                alt={project.name}
                width={200}
                height={200}
                className="w-full h-40 sm:h-48 object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-green-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* External Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 hover:bg-green-400 text-black p-1.5 sm:p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
              >
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Technology Tags */}
              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-green-400 text-xs sm:text-sm rounded-full border border-gray-700 hover:border-green-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsComponent;