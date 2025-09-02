import Image from "next/image";
import React from "react";
import myPicture from "@/assets/Grad_Pic.jpg";
import SocialHandles from "@/components/socialHandles";

function AboutPage() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-black text-white lg:px-20 mx-4">
        {/* <section className="bg-black text-white py-16 px-6 lg:px-20 flex flex-col items-center"> */}
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold relative inline-block">
            About Me
            {/* Animated underline */}
            <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-emerald-500 animate-pulse rounded-full"></span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src={myPicture}
              alt="Profile Picture"
              width={350}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center mx-2 lg:pl-6">
            <h3 className="text-emerald-500 text-lg mb-2">Who am I?</h3>
            <h1 className="text-2xl lg:text-3xl font-bold mb-4 leading-snug">
              I&apos;m <span className="text-white">Zainab Asif</span>, a Visual
              UX/UI Designer and Web Developer
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a freelancer based in [Your Location] and I&apos;ve been
              building noteworthy UX/UI designs and websites for years, which
              comply with the latest design trends. I help convert a vision and
              an idea into meaningful and useful products. Having a sharp eye
              for product evolution helps me prioritize tasks, iterate fast and
              deliver faster.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-gray-300 mb-8">
              <p>
                <span className="font-semibold text-white">Name:</span> Zainab
                Asif
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:youremail@example.com"
                  className="text-emerald-400 hover:underline"
                >
                  zainabasif.work@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Age:</span> 21
              </p>
              <p>
                <span className="font-semibold text-white">From:</span> Pakistan
              </p>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="/cv.pdf" // put your CV file
                download
                className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 transition text-center"
              >
                Download CV
              </a>
              {/* Social Icons */}
              {/* <SocialHandles/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
