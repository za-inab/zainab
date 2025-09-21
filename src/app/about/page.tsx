import Image from "next/image";
import React from "react";
import myPicture from "@/assets/Grad_Pic.jpg";

function AboutPage() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center mb-10">
      <div className="flex flex-col justify-center items-center bg-black text-white lg:px-10 mx-3">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold relative inline-block">
            About <span className="text-emerald-400">Me</span>
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
              I&apos;m <span className="text-white">Zainab Asif</span>, a
              Software Engineer and Full Stack Developer
            </h1>
            <section className="space-y-2 text-gray-300 mb-6 leading-relaxed">
              <p className="leading-relaxed text-gray-300">
                I’m a{" "}
                <span className="text-emerald-400">Software Engineer</span> with
                <span className="text-emerald-400"> 2+ years</span> of
                professional experience (and{" "}
                <span className="text-emerald-400">4 years</span> of coding
                before that). I’ve built{" "}
                <span className="text-emerald-400">full-stack</span> apps,
                explored
                <span className="text-emerald-400"> Machine Learning & AI</span>
                , and earned a reputation for writing code that’s simple, neat,
                and easy to understand. I love learning new things and pushing
                my curiosity. My main tools are
                <span className="text-emerald-400"> JavaScript</span>,{" "}
                <span className="text-emerald-400">Python</span>, and a steady
                flow of tea{" "}
                <span>(the real framework holding everything together)</span>.
              </p>

              <p className="leading-relaxed text-gray-300">
                I work comfortably in high stakes spaces like live environment
                issue handling,
                <span className="text-emerald-400"> payment processing</span>,
                and
                <span className="text-emerald-400"> large scale CRMs</span> used
                by millions across MENA. My strengths include{" "}
                <span className="text-emerald-400">bug resolution</span>,
                <span className="text-emerald-400"> code optimization</span>,
                and
                <span className="text-emerald-400"> refactoring</span> complex
                code into simple, modular, clean systems that scale.{" "}
                <span className="text-emerald-400">
                  I don&apos;t just write code, I deliver results you can count
                  on.
                </span>
                .
              </p>
            </section>

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
                <span className="font-semibold text-white">Age:</span> 23
              </p>
              <p>
                <span className="font-semibold text-white">From:</span> Pakistan
              </p>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="./Zainab-Asif_Resume_SoftwareEngineer_React_JS.pdf" // put your CV file
                download="Zainab_Asif_CV_JS_Full_Stack_SE.pdf"
                className="px-6 py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-black hover:border-2 hover:border-emerald-500 hover:text-emerald-500 transition text-center"
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
