import Image from "next/image";
import React from "react";
import myPicture from "@/assests/Grad_Pic.jpg";

function AboutPage() {
  return (
    // <div className="flex flex-col h-full w-full justify-center items-center">
    //   <h1>About Me</h1>
    //   <div className="flex flex-col md:flex-row">
    //     <div>
    //       <Image src={myPicture} alt="my Picture" className="w-50 h-50" />
    //     </div>
    //     <div>Para div</div>
    //   </div>
    // </div>
    <>
      <section className="bg-black text-white py-16 px-6 lg:px-20 flex flex-col items-center">
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
          <div className="flex flex-col justify-center lg:pl-6">
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
                  youremail@example.com
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
                className="px-6 py-3 bg-emerald-500 text-black rounded-full font-semibold hover:bg-emerald-400 transition"
              >
                Download CV
              </a>
              {/* Social Icons */}
              <div className="flex space-x-5 text-xl">
                <a href="#" className="hover:text-emerald-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-emerald-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-emerald-400">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-emerald-400">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-emerald-400">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
