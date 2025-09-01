"use client";
import React, { useState } from "react";
import { FiPaperclip } from "react-icons/fi";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
    attachment: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "attachment") {
      setFormData({ ...formData, attachment: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl text-white space-y-8"
    >
      {/* Heading */}
      <div>
        <h2 className="text-4xl font-bold">
          Let&apos;s Work <span className="text-green-500">Together!</span>
        </h2>
        <p className="text-gray-400 mt-2">hello@drake.design</p>
      </div>

      {/* Grid Inputs */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-xs uppercase text-gray-400 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 placeholder-gray-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-xs uppercase text-gray-400 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 placeholder-gray-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-xs uppercase text-gray-400 mb-2">
            Phone <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your number phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 placeholder-gray-500"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="text-xs uppercase text-gray-400 mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 text-gray-400"
          >
            <option value="" disabled hidden>
              Select a subject
            </option>
            <option value="design" className="text-black">
              Design
            </option>
            <option value="development" className="text-black">
              Development
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-xs uppercase text-gray-400 mb-2">
            Your Budget <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            name="budget"
            placeholder="A range budget for your project"
            value={formData.budget}
            onChange={handleChange}
            className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-xs uppercase text-gray-400 mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Write your message here ..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-2 placeholder-gray-500"
        />
      </div>

      {/* Attachment */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <FiPaperclip className="text-gray-400" />
        <label className="cursor-pointer text-sm text-gray-400">
          Add an attachment
          <input
            type="file"
            name="attachment"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-green-500 text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:border hover:border-green-500 hover:text-green-500 transition"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
