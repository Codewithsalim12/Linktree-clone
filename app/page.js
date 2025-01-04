"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import Link from "next/link";

// Correctly initialize Poppins with available weights
const poppins = Poppins({
  subsets: ["latin"], // Ensures Latin characters are included
  weight: ["400", "500", "700"], // These weights are available for Poppins
  display: "swap", // Improves font display performance
});

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main className={poppins.className}>
      {" "}
      {/* Apply Poppins font to the whole page */}
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 py-16 md:py-36">
        <div className="flex justify-center flex-col mx-5 md:ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-4xl md:text-6xl">
            Everything you{" "}
          </p>
          <p className="text-yellow-300 font-bold text-4xl md:text-6xl">
            are. In one,
          </p>
          <p className="text-yellow-300 font-bold text-4xl md:text-6xl">
            simple link in bio.
          </p>
          <p className="text-yellow-300 text-base md:text-lg my-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube, and other social media
            profiles.
          </p>
          <div className="input flex flex-col md:flex-row gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-2 py-2 focus:outline-green-800 rounded-md"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={() => createTree()}
              className="bg-pink-300 rounded-full px-4 py-2 md:py-4 font-semibold"
            >
              Claim your Bittree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mx-5 md:mr-[10vw] group">
          <img
            src="/home.png"
            alt="homepage image"
            className="transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-6 z-[0]"
          />
        </div>
      </section>
      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="box1 px-5 md:px-10 group">
          <img
            src="/home.png"
            alt="Homepage"
            className="transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:translate-y-[-2px]"
          />
        </div>
        <div className="box2 px-5 md:px-0">
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#502274]">
            <p>Create and customize</p>
            <p>Your Linktree in </p>
            <p>minutes</p>
          </h1>

          <p className="text-[#502274] pt-4 md:pt-6 text-base md:text-lg font-medium">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast,
          </p>
          <p className="text-[#502274] font-medium">
            events and more. It all comes together in a link in bio landing page
            designed to convert.
          </p>

          <button className="bg-[#502274] transition text-white mt-6 md:mt-10 mr-0 md:mr-10 hover:bg-[#310652] py-3 md:py-4 px-6 md:px-8 rounded-full font-medium">
            <Link href="/generate">Get started for free</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
