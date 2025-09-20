"use client";
import { handleSubmit } from "@/utils/emailSubmit";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";


function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
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
    const resp = await handleSubmit(formData);
    if (resp.success) {
      toast.info("Message Sent Successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else toast.error(resp.message);
    setLoading(false);
  };
  return (
    <div className="border border-emerald-950 rounded-xl px-12 py-10 hover:border-2 hover:border-emerald-500">
      <form
        onSubmit={(e) => {
          setLoading(true);
          submitHandler(e);
        }}
        className="w-full max-w-2xl ] text-white space-y-6"
        method={"POST"}
      >
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold">
            Drop Your <span className="text-emerald-500">Message !</span>
          </h2>
          <p className="text-gray-400 mt-3">zainabasif.work@gmail.com</p>
        </div>

        {/* Grid Inputs */}
        <div className="flex flex-col gap-6">
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
              className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500 px-2"
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
              className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500 px-2"
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
              className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500 px-2"
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
            rows={3}
            className="bg-transparent border-b border-gray-700 focus:border-emerald-500 outline-none py-2 placeholder-gray-500 px-2"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-emerald-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 transition disabled:border-2 disabled:border-emerald-500 disabled:bg-black disabled:text-emerald-500"
          disabled={loading}
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
