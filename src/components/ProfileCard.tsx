import React from "react";
import { Globe, MapPin } from "lucide-react";
import myPicture from "@/assets/Grad_Pic.jpg";
import Image from "next/image";
import { GlowingEffect } from "./ui/glowing-effect";
import { Twitter, Github, Linkedin, Instagram } from "@deemlol/next-icons";
import { MdOutlineEmail } from "react-icons/md";
import SocialHandles from "./socialHandles";
import Social from "@/data/SocialHandles.json";
import Link from "next/link";

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

const getIcons = (name: string) => {
  const icons = {
    twitter: <Twitter size={22} color="#FFFFFF" />,
    github: <Github size={22} color="#FFFFFF" />,
    linkedin: <Linkedin size={22} color="#FFFFFF" />,
  };

  return icons[name];
};

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
    <div className="max-w-[350px] max-h-[620px] bg-black backdrop-blur-sm rounded-3xl p-[30px] lg:p-8 border-1 border-emerald-950 justify-center items-center text-center shadow-2xl shadow-emerald-400/20 hover:shadow-emerald-500/30 transition-shadow duration-500 ">
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
      <div className="mb-3">
        <div className="justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-white mb-1">
            {name}
          </h1>
          <div className="text-[11.5px] text-gray-400">
            <div>
              {title} {subtitle}
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mb-4 justify-items-center items-center">
        <div className="max-w-[250px] aspect-square rounded-2xl overflow-hidden ">
          <Image
            src={myPicture}
            width={256}
            height={256}
            alt={`${name} profile`}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6 space-y-3">
        <div className="text-white font-medium text-sm lg:text-base">
          {email}
        </div>
        <div className="flex items-center text-gray-400 text-sm justify-center">
          <MapPin size={16} className="mr-2" />
          {location}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3 mb-6 items-center justify-center">
        <SocialHandles
          handles={Social.handles}
          direction={"row"}
          size={"md"}
          variant={"bordered"}
          className={""}
          showLabels={true}
        />
      </div>

      {/* Hire Me Button */}
      <Link href={"/contact"}>
        <div className="w-full font-medium bg-emerald-500 text-black py-3 lg:py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2  hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 text-center">
          <MdOutlineEmail size={20} />
          {hireMeText}
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;