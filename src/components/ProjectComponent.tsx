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
    <div className="rounded-xl border border-gray-700 bg-gray-900/40 overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.photo}
          alt={project.name}
          width={500}
          height={300}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>
        <Link
          href={project.liveLink}
          target="_blank"
          className="inline-block mt-3 text-emerald-400 text-sm font-medium hover:underline"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
};

const ProjectComponent: React.FC<{ data: Project[] }> = ({ data }) => (
  <div>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Projects <span className="text-blue-400">●</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </div>
);

export default ProjectComponent;
