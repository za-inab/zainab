"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  name: string;
  description: string;
  liveLink: string;
  photo: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900/40 overflow-hidden group hover:shadow-xl transition-all duration-300 p-2.5 h-[410px] max-h-[410px] min-w-[283px] w-[355px] xl:w-[284px]">
      <div className="relative w-full h-48 overflow-hidden p-2">
        <Image
          src={project.photo}
          alt={project.name}
          width={500}
          height={300}
          className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <div className="h-[40%]">
          <div className="flex flex-row gap-1">
            <h3 className="text-lg whitespace-nowrap font-semibold text-white">
              {project.name}
            </h3>
            <div className="mx-1 h-0.5 bg-emerald-400 w-full self-center items-center justify-center"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-ellipsis">
            {project.description}
          </p>
        </div>
        <div className="">
          <Link
            href={project.liveLink}
            target="_blank"
            className="inline-block mt-3 text-emerald-400 text-sm font-medium hover:underline"
          >
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectComponent: React.FC<{ data: Project[] }> = ({ data }) => (
  <div className="w-[100%] justify-items-center md:justify-items-start">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Projects <span className="text-emerald-400">●</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
      {data.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </div>
);

export default ProjectComponent;
