import React from "react";
import ContactForm from "@/components/ContactForm";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/ProfileData.json";


function ContactPage() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="text-center mb-12 mt-2">
        <p className="text-gray-400 mb-2">Feel free to contact</p>
        <h2 className="text-4xl font-bold relative inline-block">
          Let&apos;s Work <span className="text-emerald-400">Together</span>
          {/* Animated underline */}
          <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-emerald-500 animate-pulse rounded-full"></span>
        </h2>
      </div>
      <div className="flex flex-col justify-around md:flex-row w-[85%] max-w-[1024px] min-h-screen bg-black gap-10 space-x-6 space-y-10 mb-10 md:space-y-0 ">
        {/* Left Card */}
        <div className="self-center sticky">
          <ProfileCard {...profileData} />
        </div>

        {/* Contact Form */}
        <div className="self-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
