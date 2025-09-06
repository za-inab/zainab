import React from "react";
import Image from "next/image";
import { FaTwitter, FaDribbble, FaInstagram, FaGithub } from "react-icons/fa";
import myPicture from "@/assets/Grad_Pic.jpg";

function InfoCard() {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-md w-full max-w-sm flex flex-col items-center space-y-6">
      {/* Profile Image */}
      <Image
        src={myPicture} // 👉 replace with your image
        alt="Profile"
        width={200}
        height={200}
        className="rounded-xl"
      />

      {/* Name & Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Drake</h2>
        <p className="text-sm text-gray-400">Framer Designer & Developer</p>
      </div>

      {/* Contact Info */}
      <div className="text-center text-gray-300">
        <p>hello@drake.design</p>
        <p>Based in Los Angeles, CA</p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4">
        <FaTwitter className="hover:text-emerald-500 cursor-pointer" />
        <FaDribbble className="hover:text-emerald-500 cursor-pointer" />
        <FaInstagram className="hover:text-emerald-500 cursor-pointer" />
        <FaGithub className="hover:text-emerald-500 cursor-pointer" />
      </div>

      {/* Button */}
      <button className="bg-emerald-500 text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:border hover:border-emerald-500 hover:text-emerald-500 transition">
        HIRE ME!
      </button>
    </div>
  );
}

export default InfoCard;
