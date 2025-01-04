import React from "react";
import { Poppins } from "next/font/google";

// Import the Poppins font with desired configuration
const poppins = Poppins({
  subsets: ["latin"], // Ensures Latin characters are included
  weight: ["400", "500", "700"], // These weights are available for Poppins
  display: "swap", // Improves font display performance
});

const Marketplace = () => {
  const featuredApps = [
    {
      title: "Snapchat",
      description: "Promote your Public Profile",
      image: "/snapchat.jpg",
    },
    {
      title: "Audiomack",
      description: "Add an Audiomack player to your Linktree",
      image: "/Audiomack.webp",
    },
    {
      title: "Soundcloud",
      description: "Get your music heard on SoundCloud",
      image: "/soundcloud.webp",
    },
    {
      title: "TikTok",
      description: "Share your TikToks on your Linktree",
      image: "/tiktok.webp",
    },
    {
      title: "YouTube",
      description: "Share YouTube videos on your Linktree",
      image: "/youtube.jpg",
    },
    {
      title: "Cameo",
      description: "Make impossible fan connections possible",
      image: "/cameo.png",
    },
  ];

  const appsToMakeMoney = [
    {
      title: "GoFundMe",
      description: "Promote the causes you care about most",
      image: "/gofoundme.svg",
    },
    {
      title: "Spring",
      description: "Display your products to boost sales",
      image: "/spring.svg",
    },
    {
      title: "Shopify",
      description: "Display your products to boost sales",
      image: "/shopify.svg",
    },
  ];

  const growYourFollowing = [
    {
      title: "Snapchat",
      description: "Promote your Public Profile",
      image: "/snapchat.jpg",
    },
    {
      title: "Reddit",
      description: "Showcase your Reddit profile",
      image: "/redit.svg",
    },
  ];

  const allApps = [
    {
      title: "OpenSea",
      description: "Showcase NFTs on your Linktree",
      image: "/opensea.svg",
    },
    {
      title: "Spotify",
      description: "Share your latest or favorite music",
      image: "/spotify.svg",
    },
    {
      title: "Facebook",
      description: "Add Facebook videos to your Linktree",
      image: "/facebook.svg",
    },
    {
      title: "Pinterest",
      description: "Showcase Pins, boards, and more",
      image: "/pinterest.svg",
    },
    {
      title: "Podcasts",
      description: "Get more podcast listeners and subscribers",
      image: "/podcasts.svg",
    },
  ];

  return (
    <div className={poppins.className}>
      {/* Hero Section */}
      <section className="pt-36 bg-[#5a1414] py-16 text-center text-white">
        <h1 className="text-7xl font-extrabold mb-4">Connect more of you</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Bring the best experiences across the internet to one place: your
          Linktree
        </p>
      </section>

      {/* Featured Apps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Share your content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredApps.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make Money Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Make and collect money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {appsToMakeMoney.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Your Following Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Grow your following</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {growYourFollowing.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Link Apps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            All link apps and integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allApps.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Program Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-500 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-8">
          Join our developer program
        </h2>
        <p className="text-lg mb-8">
          We're expanding access to our APIs and SDKs. Register Now
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Register Now
        </button>
      </section>
    </div>
  );
};

export default Marketplace;
