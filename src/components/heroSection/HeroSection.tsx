import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import words from "@/data/introData.json";
import SocialHandles from "../socialHandles";
import Social from "@/data/SocialHandles.json";

function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <SparklesCore
        id="tsparticlesfullpage"
        background="black"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#05df72"
      />
      <div className="p-4 absolute z-10 w-full text-center mt-10">
        <div className="flex flex-row justify-center items-center">
          <h1 className="mt-20 md:mt-0 text-6xl sm:text-7xl lg:text-8xl xl:text-[124px] font-extrabold bg-heading text-center leading-tight sm:leading-tight md:text-8xl md:leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 ">
            Zainab <span className="text-emerald-500">Asif</span>
          </h1>
        </div>
        <div className="flex flex-row text-neutral-300 justify-center items-center text-center">
          <TypewriterEffectSmooth
            className="text-center max-w-xl text-heading leading-relaxed md:text-lg md:leading-relaxed "
            cursorClassName="text-center bg-emerald-400"
            words={words.words}
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6 items-center justify-center">
          <Link href={"/about"}>
            <Button
              borderRadius="3rem"
              className="
              bg-transparent
            text-white border-1 border-emerald-950
             font-medium hover:border-1 hover:border-emerald-500 hover:text-emerald-500 transition text-center
            "
            >
              About Me
            </Button>
          </Link>
        </div>

        <div className="fixed bottom-5 left-6 items-center justify-center border-2 border-emerald-950 rounded-full p-2">
          <SocialHandles
            handles={Social.handles}
            direction={"col"}
            size={"md"}
            variant={"bordered"}
            className={""}
            showLabels={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
