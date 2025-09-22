import React from "react";
import ContactForm from "@/components/ContactForm";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/ProfileData.json";


function ContactPage() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="min-h-screen bg-black relative w-[90%]">
        <div className="text-center mb-12 mt-2">
          <p className="text-gray-400 mb-2">Feel free to contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            Let&apos;s Work <span className="text-emerald-400">Together</span>
            {/* Animated underline */}
            <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-emerald-500 animate-pulse rounded-full"></span>
          </h2>
        </div>

        <div className="pb-16 px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 gap-y-14 lg:gap-12 items-center lg:items-start justify-center min-h-[calc(100vh-144px)]">
            {/* Left Card */}
            <div className="lg:sticky lg:top-24 flex-shrink-0 justify-items-center justify-center items-center">
              <ProfileCard {...profileData} />
            </div>

            <div className="max-w-7xl justify-center items-center justify-items-center">
              {/* Contact Form */}
              <div className="self-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
