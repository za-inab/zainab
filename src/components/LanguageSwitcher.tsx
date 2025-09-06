import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flag?: string;
}

interface LanguageSwitcherProps {
  languages: Language[];
  currentLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languages,
  currentLanguage,
  onLanguageChange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const current = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white text-sm hover:border-emerald-400 transition-all duration-300 group"
        aria-label="Switch language"
      >
        {current.flag && <span className="text-base">{current.flag}</span>}
        <span className="font-medium">{current.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 group-hover:text-emerald-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 mt-2 w-full bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-200 hover:bg-gray-800 ${
                  language.code === currentLanguage
                    ? "text-emerald-400 bg-gray-800/50"
                    : "text-white"
                }`}
              >
                {language.flag && (
                  <span className="text-base">{language.flag}</span>
                )}
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;