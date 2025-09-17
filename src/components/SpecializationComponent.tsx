"use client";

import React from "react";

export interface Specialization {
  title: string;
  description: string;
  metrics: string[];
  icon?: React.ReactNode;
}

const SpecializationCard: React.FC<{ specialization: Specialization }> = ({
  specialization,
}) => {
  return (
    <div className="p-6 rounded-2xl border border-gray-700 bg-gray-900/40 hover:bg-gray-800/70 transition-all duration-300 shadow-lg flex justify-between items-start gap-4 w-[355px] sm:min-w-[100%]">
      <div>
        <h3 className="text-xl font-semibold text-white">
          {specialization.title}
        </h3>
        <p className="text-gray-400 mt-2">{specialization.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {specialization?.metrics.map((m, i) => (
            <span
              key={i}
              className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      {specialization.icon && (
        <div className="text-emerald-400 text-3xl">{specialization.icon}</div>
      )}
    </div>
  );
};

const SpecializationComponent: React.FC<{ data: Specialization[] }> = ({
  data,
}) => (
  <div className="space-y-6 mb-12 w-[100%]">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      My <span className="text-emerald-400">Specializations</span>
    </h2>
    {data.map((s, i) => (
      <SpecializationCard key={i} specialization={s} />
    ))}
  </div>
);

export default SpecializationComponent;
