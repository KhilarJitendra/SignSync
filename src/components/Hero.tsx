// Hero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import SyncedVideos from "./SyncedVideos";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-50"
        style={{ filter: "brightness(0.4)" }}
      >
        <source
          src="https://videos.ctfassets.net/7jj4kb5ys8po/5DPrWn1ARYRFaC4tr8JNhC/e40039a4bde8d6566a0941ef4c219337/HP_Hero_Video_v6.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 mt-[200px]">
          <span className="block">AI-Powered Sign Language Avatars</span>
          <span className="block text-blue-500">
            For a More Inclusive Digital World
          </span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          Transform videos into dynamic ASL content with our lifelike digital
          avatars.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
            Watch Demo
          </button>
        </div>
        <SyncedVideos video1="/human.mp4" video2="/final_video.mp4" />
      </div>
    </div>
  );
};

export default Hero;
