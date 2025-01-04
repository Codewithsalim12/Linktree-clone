"use client";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

// Import the Poppins font with desired configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const LearnPage = () => {
  const blogPosts = [
    {
      category: "Best Practices",
      posts: [
        {
          title:
            "Linktree’s 2023 Creator Report: How to Navigate Attention Overload and Break Through the Noise",
          date: "27 September",
          time: "5 mins",
          image: "/report.avif",
        },
        {
          title: "How to promote a podcast: 10 practical tips",
          date: "30 June",
          time: "8 mins",
          image: "/podcast-promotion.avif",
        },
      ],
    },
    {
      category: "Company",
      posts: [
        {
          title:
            "It’s GUTSY Out Here: Linktree Launches First-Ever Custom Theme with Olivia Rodrigo",
          date: "31 August",
          time: "1 min",
          image: "/Theme.avif",
        },
        {
          title:
            "See how The Park’s Finest used the GoFundMe Link App to raise over $25k",
          date: "09 October",
          time: "5 mins",
          image: "/parks.avif",
        },
      ],
    },
    {
      category: "Creators",
      posts: [
        {
          title:
            "Meet the podcast hosts on a mission to empower and uplift AAPI women",
          date: "20 May",
          time: "6 mins",
          image: "/podcast-hosts.avif",
        },
        {
          title: "How creator Brownies & Lemonade connects with their fans",
          date: "02 July",
          time: "3 mins",
          image: "/brownies.avif",
        },
      ],
    },
    {
      category: "Product News",
      posts: [
        {
          title:
            "Linktree is the exclusive link-in-bio platform for Snapchat Public Profiles",
          date: "08 July",
          time: "1 min",
          image: "/snap.webp",
        },
        {
          title:
            "The power of Linktree in the palm of your hand: introducing our new mobile app",
          date: "13 July",
          time: "3 mins",
          image: "/app.avif",
        },
      ],
    },
    {
      category: "Trends",
      posts: [
        {
          title:
            "How to support the growing Black winemaking industry in the U.S.",
          date: "09 February",
          time: "7 mins",
          image: "/wine.avif",
        },
        {
          title:
            "Online therapy has been a total game changer for mental health",
          date: "08 October",
          time: "10 mins",
          image: "/therapy.png",
        },
      ],
    },
  ];

  // Function to filter blog posts by category
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);

  const filterPosts = (category) => {
    if (category === "All") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(
        (categoryObj) => categoryObj.category === category
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div
      className={`${poppins.className} max-w-7xl mx-auto p-8 pt-72 bg-[#F3F3F1]`}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-center mb-12 text-gray-900">
        The Linktree Blog
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-36">
        <button
          onClick={() => filterPosts("Company")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Company
        </button>
        <button
          onClick={() => filterPosts("Best Practices")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Best Practices
        </button>
        <button
          onClick={() => filterPosts("Trends")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Trends
        </button>
        <button
          onClick={() => filterPosts("Creators")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Creators
        </button>
        <button
          onClick={() => filterPosts("Product News")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Product News
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((category, index) => (
          <div key={index} className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
              {category.category}
            </h2>
            {category.posts.map((post, index) => (
              <div key={index} className="border-b pb-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                      {post.title}
                    </h3>
                    <div className="text-gray-600 text-sm mt-2">
                      <span>{post.date}</span> | <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
