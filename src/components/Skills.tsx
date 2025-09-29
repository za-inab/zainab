"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Skill {
  id: string;
  name: string;
  icon: string;
  category?: string;
  color?: string;
}

interface SkillsProps {
  skills: Skill[];
  title?: string;
  className?: string;
}

function SkillCard({ skill }: { skill: Skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative aspect-square bg-gray-900/60 border border-gray-800 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:bg-gray-800/80 hover:scale-105 bg-gradient-to-b from-emerald-950 to-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className={` transition-all duration-300 ${
          isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      >
        {skill.icon.startsWith("http") ||
        skill.icon.startsWith("data:") ||
        skill.icon.startsWith("/") ? (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={60}
            height={60}
            className="aspect-square object-contain"
          />
        ) : (
          <span className="text-3xl">{skill.icon}</span>
        )}
      </div>

      {/* Skill Name on Hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-2 transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-125"
        }`}
      >
        <span className="text-white text-xs md:text-sm font-medium text-center leading-tight text-wrap truncate">
          {skill.name}
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-all duration-300" />
    </div>
  );
}

const Skills: React.FC<SkillsProps> = ({
  skills,
  title = "My",
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-white">
          {title} <span className="text-emerald-400">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3.5
      "
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
