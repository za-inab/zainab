'use client'
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
      className="group relative w-20 h-20 md:w-24 md:h-24 bg-gray-900/60 border border-gray-800 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-green-400 hover:bg-gray-800/80 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className={`transition-all duration-300 ${
          isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      >
        {skill.icon.startsWith("http") || skill.icon.startsWith("data:") ? (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={50}
            height={50}
            className="w-10 h-10 object-contain"
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
        <span className="text-white text-xs font-medium text-center leading-tight">
          {skill.name}
        </span>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-300" />
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ 
  skills, 
  title = "Skills", 
  className = "" 
}) => {
  return (
    <div className={`${className}`}>
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {title} <span className="text-blue-400">●</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;