import React from 'react';
import { Twitter, Globe, Instagram, MapPin } from 'lucide-react';
import myPicture from "@/assets/Grad_Pic.jpg";
import Image from "next/image";
import { GlowingEffect } from "./ui/glowing-effect";

interface SocialLink {
  id: string;
  platform: "twitter" | "website" | "instagram" | "github";
  url: string;
  icon?: React.ReactNode;
}

interface ProfileCardProps {
  name: string;
  title: string;
  subtitle: string;
  profileImage: string;
  email: string;
  location: string;
  copyright: string;
  hireMeText?: string;
  socialLinks: SocialLink[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  subtitle,
  profileImage,
  email,
  location,
  copyright,
  hireMeText = "HIRE ME!",
  socialLinks,
}) => {
  const getSocialIcon = (platform: string) => {
    const iconProps = {
      size: 20,
      className: "text-gray-400 group-hover:text-white transition-colors",
    };

    switch (platform) {
      case "twitter":
        return <Twitter {...iconProps} />;
      case "website":
        return <Globe {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "github":
        return <Globe {...iconProps} />; // Using Globe as fallback
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <div className="w-full bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-800">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
        variant={"green"}
      />

      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl lg:text-2xl font-bold text-white mb-1">
          {name} <span className="text-xs text-gray-500">®</span>
        </h1>
        <div className="text-sm text-gray-400">
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mb-6 lg:mb-8">
        <div className="w-full h-48 lg:h-64 rounded-2xl overflow-hidden">
          <Image
            src={myPicture}
            width={256}
            height={256}
            alt={`${name} profile`}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6 lg:mb-8 space-y-3">
        <div className="text-white font-medium text-sm lg:text-base">
          {email}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <MapPin size={16} className="mr-2" />
          {location}
        </div>
      </div>

      {/* Copyright */}
      <div className="mb-6 lg:mb-8">
        <p className="text-xs text-gray-500">{copyright}</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-3 mb-6 lg:mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="group w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-400 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon || getSocialIcon(link.platform)}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <button className="w-full font-medium bg-emerald-500 text-white py-3 lg:py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2  hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 text-center">
        {hireMeText}
      </button>
    </div>
  );
};

export default ProfileCard;