import Image from 'next/image';
import React from 'react';

// Individual Specialization Card Component
const SpecializationCard = ({ name, description, metric, icon, image }) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105">
      {/* Optional Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image} 
            alt={name}
            className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Header with Icon and Metric */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Icon */}
          {icon && (
            <div className="text-xl sm:text-2xl flex-shrink-0">
              {typeof icon === 'string' ? icon : icon}
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors truncate">
            {name}
          </h3>
        </div>
        
        {/* Metric */}
        {metric && (
          <div className="text-right flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-green-400">{metric}</div>
            <div className="text-xs sm:text-sm text-gray-500">Projects</div>
          </div>
        )}
      </div>
      
      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-4">
        {description}
      </p>

      {/* Progress indicator (only if metric exists) */}
      {metric && (
        <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 sm:h-2 rounded-full transition-all duration-500 group-hover:from-green-300 group-hover:to-green-400"
            style={{ width: `${Math.min(parseInt(metric) / 1.5, 100)}%` }}
          />
        </div>
      )}
    </div>
  );
};

// Main Specialization Component
const SpecializationComponent = ({ specializations, title = "My Specializations", subtitle = "Areas of expertise where I deliver exceptional results" }) => {
  // Validate that specializations is an array
  if (!Array.isArray(specializations)) {
    console.warn('SpecializationComponent expects an array of specializations');
    return null;
  }

  return (
    <section>
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
          {title.includes('Specializations') ? (
            <>
              {title.split(' ')[0]} <span className="text-green-400">{title.split(' ')[1]}</span>
            </>
          ) : (
            <span className="text-green-400">{title}</span>
          )}
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {specializations.map((spec, index) => (
          <SpecializationCard
            key={spec.id || index}
            name={spec.name}
            description={spec.description}
            metric={spec.metric}
            icon={spec.icon}
            image={spec.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecializationComponent;