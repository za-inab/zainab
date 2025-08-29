import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

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
      <div className="p-4 absolute z-10 w-full text-center -mt-10">
        <h1 className="mt-20 md:mt-0 text-7xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 ">
          Zainab Asif
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome, I am Software Engineer, Full-Stack Web Developer and
          Designer.
        </p>
        <div className="mt-4">
          <Link href={"/about"}>
            <Button
              borderRadius="1rem"
              className="bg-black dark:bg-black text-white dark:text-white border-neutral-300 dark:border-slate-800"
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
