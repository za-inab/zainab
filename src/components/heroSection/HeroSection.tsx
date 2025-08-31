import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import words from "@/data/introData.json";

function HeroSection() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="p-4 absolute z-10 w-full text-center mt-10">
        <div className="flex flex-row justify-center items-center">
          <h1 className="mt-20 md:mt-0 text-7xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 ">
            Zainab
          </h1>
          <h1 className="mt-20 md:mt-0 text-7xl md:text-7xl font-bold text-emerald-500">
            Asif
          </h1>
        </div>
        <div className="flex text-neutral-300 justify-center items-center text-center">
          <TypewriterEffectSmooth
            className="flex flex-row text-center"
            cursorClassName="bg-emerald-400"
            words={words.words}
          />
        </div>

        <div className="mt-4">
          <Link href={"/about"}>
            <Button
              borderRadius="1rem"
              className="
            bg-transparent
            text-white "
            >
              About Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
