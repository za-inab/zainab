import React from "react";
import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";
import SideNav from "@/components/SideNav";

function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center my-5 mt-29">
      <div className="flex flex-col md:flex-row min-h-screen bg-black justify-around p-8 space-x-6">
        {/* Left Card */}
        <InfoCard />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
