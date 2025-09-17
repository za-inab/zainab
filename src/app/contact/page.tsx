import React from "react";
import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/ProfileData.json";

function ContactPage() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col md:flex-row w-10/12 max-w-[1024px] min-h-screen bg-black justify-around space-x-6">
        {/* Left Card */}
        <div>
          <ProfileCard {...profileData} />
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
