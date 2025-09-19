"use client";
import { handleSubmit } from "@/utils/emailSubmit";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    loading: false,
  });

  const handleChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, loading: true }));
    const resp = await handleSubmit(formData);
    if (resp.success) {
      toast.info("Message Sent Successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        loading: false,
      });
    } else toast.error(resp.message);
  };
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="w-full max-w-2xl ] text-white space-y-8"
      method={"POST"}
    >
      {/* Heading */}
      <div>
        <h2 className="text-4xl font-bold">
          Let&apos;s Work <span className="text-emerald-500">Together!</span>
        </h2>
        <p className="text-gray-400 mt-2">zainabasif.work@gmail.com</p>
      </div>

      {/* Grid Inputs */}
      <div className="flex flex-col gap-8">
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
            className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500"
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
            onChange={(e) => handleChange(e)}
            required
            className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500"
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
            className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-xs uppercase text-gray-400 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          placeholder="Write your message here ..."
          value={formData.message}
          onChange={handleChange}
          required={true}
          rows={4}
          className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 transition"
        disabled={formData.loading}
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
