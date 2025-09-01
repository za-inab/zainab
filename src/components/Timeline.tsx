import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'education' | 'work';
  period: string;
  title: string;
  organization: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const TimelineIcon: React.FC<{ type: 'education' | 'work' }> = ({ type }) => {
  const Icon = type === 'education' ? GraduationCap : Briefcase;
  
  return (
    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 border-2 border-gray-700 transition-all duration-300 group-hover:border-green-400 group-hover:bg-green-400/10">
      <Icon className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-green-400" />
    </div>
  );
};

const TimelineItemComponent: React.FC<{ item: TimelineItem; isLast: boolean }> = ({ item, isLast }) => {
  return (
    <div className="group relative pl-10 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-8 h-full w-px bg-gray-700 transition-all duration-300 group-hover:bg-green-400/30" />
      )}
      
      {/* Icon */}
      <TimelineIcon type={item.type} />
      
      {/* Content */}
      <div className="transition-all duration-300 group-hover:transform group-hover:translate-x-1">
        <div className="mb-1 text-sm text-green-400 font-medium transition-all duration-300 group-hover:text-green-300">
          {item.period}
        </div>
        <h3 className="text-lg font-semibold text-white mb-1 transition-all duration-300 group-hover:text-green-50">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">
          {item.organization}
        </p>
        {item.description && (
          <p className="text-gray-500 text-sm mt-2 transition-all duration-300 group-hover:text-gray-400">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <TimelineItemComponent 
          key={item.id} 
          item={item} 
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;