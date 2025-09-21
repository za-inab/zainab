"use client";
import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Globe,
  Mail,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

interface SocialHandle {
  id: string;
  platform:
    | "twitter"
    | "instagram"
    | "linkedin"
    | "github"
    | "facebook"
    | "website"
    | "email"
    | "youtube"
    | "upwork"
    | "custom";
  url: string;
  label?: string;
  customIcon?: React.ReactNode;
  ariaLabel?: string;
}

interface SocialHandlesProps {
  handles: SocialHandle[];
  direction?: "row" | "col";
  size?: "sm" | "md" | "lg";
  variant?: "minimal" | "bordered" | "filled";
  className?: string;
  showLabels?: boolean;
}

const SocialHandles: React.FC<SocialHandlesProps> = ({
  handles,
  direction = "row",
  size = "md",
  variant = "bordered",
  className = "",
  showLabels = false,
}) => {
  const getSocialIcon = (platform: string, iconSize: number) => {
    const iconProps = {
      size: iconSize,
      className: "transition-colors duration-300",
    };

    switch (platform) {
      case "twitter":
        return <Twitter {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "github":
        return <Github {...iconProps} />;
      case "facebook":
        return <Facebook {...iconProps} />;
      case "website":
        return <Globe {...iconProps} />;
      case "email":
        return <Mail {...iconProps} />;
      case "youtube":
        return <Youtube {...iconProps} />;
      case "upwork":
        return <FaUpwork {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return { container: "w-8 h-8", icon: 16, text: "text-xs" };
      case "lg":
        return { container: "w-12 h-12", icon: 24, text: "text-base" };
      default:
        return { container: "w-10 h-10", icon: 20, text: "text-sm" };
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "minimal":
        return "text-gray-400 hover:text-emerald-400";
      case "filled":
        return "bg-gray-800 text-gray-400 hover:bg-emerald-400 hover:text-black";
      default:
        return "border border-gray-700 text-gray-400 hover:border-emerald-400 hover:text-emerald-400";
    }
  };

  const sizeClasses = getSizeClasses();
  const variantClasses = getVariantClasses();
  const flexDirection = direction === "col" ? "flex-col" : "flex-row";
  const gap = direction === "col" ? "gap-3" : "gap-3";

  const handleClick = (handle: SocialHandle) => {
    if (handle.platform === "email") {
      window.location.href = `mailto:${handle.url}`;
    } else {
      window.open(handle.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={`${className} flex ${flexDirection} ${gap} `}>
      {handles.map((handle) => (
        <div key={handle.id} className="group relative">
          <button
            onClick={() => handleClick(handle)}
            className={`
              ${sizeClasses.container} 
              ${variantClasses}
              rounded-full flex items-center justify-center 
              transition-all duration-300 hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50
            `}
            aria-label={handle.ariaLabel || `Visit ${handle.platform} profile`}
          >
            {handle.customIcon ||
              getSocialIcon(handle.platform, sizeClasses.icon)}
          </button>

          {/* Label - shows on hover or always if showLabels is true */}
          {(handle.label || showLabels) && (
            <div
              className={`
              absolute ${
                direction === "col"
                  ? "left-full ml-3 top-1/2 -translate-y-1/2"
                  : "top-full mt-2 left-1/2 -translate-x-1/2"
              }
              px-2 py-1 bg-gray-900 border border-gray-700 rounded text-white ${
                sizeClasses.text
              }
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
              whitespace-nowrap z-10
            `}
            >
              {handle.label || handle.platform}
              {/* Tooltip arrow */}
              <div
                className={`
                absolute w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45
                ${
                  direction === "col"
                    ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1"
                    : "top-0 left-1/2 -translate-x-1/2 -translate-y-1"
                }
              `}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialHandles;
