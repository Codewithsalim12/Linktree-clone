"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Generate = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState("");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (searchParams) {
      setHandle(searchParams.get("handle") || "");
    }
  }, [searchParams]);

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => setLinks([...links, { link: "", linktext: "" }]);

  const submitLinks = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ links, handle, pic, desc }),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/add`,
        requestOptions
      );

      if (!response.ok) {
        const result = await response.json();
        toast.error(
          result.message || "An error occurred while processing your request."
        );
        return;
      }

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        setLinks([{ link: "", linktext: "" }]);
        setPic("");
        setHandle("");
        setDesc("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`${poppins.className} bg-[#E9C0E9] min-h-screen grid grid-cols-1 sm:grid-cols-2`}
    >
      <div className="col1 flex justify-center items-center flex-col text-gray-900 pt-28 ml-8 sm:ml-28">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-3xl sm:text-4xl">
            Create your Bittree
          </h1>
          <div className="item">
            <h2 className="font-semibold text-xl">Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input
                value={handle || ""}
                onChange={(e) => setHandle(e.target.value)}
                className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full w-full sm:w-auto"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-semibold text-xl">Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className="mx-4">
                <input
                  value={item.linktext || ""}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full w-full sm:w-auto"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link || ""}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full w-full sm:w-auto"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="p-5 py-2 mx-2 ml-6 bg-slate-900 text-white font-bold rounded-3xl"
            >
              + Add Link
            </button>
          </div>
          <div className="item">
            <h2 className="font-semibold text-xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={pic || ""}
                onChange={(e) => setPic(e.target.value)}
                className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full w-full sm:w-auto"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
                className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full w-full sm:w-auto"
                type="text"
                placeholder="Enter description"
              />
              <button
                disabled={
                  pic === "" || handle === "" || links[0].linktext === ""
                }
                onClick={submitLinks}
                className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl"
              >
                Create your BitTree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9] pt-4">
        <img
          className="h-full object-contain"
          src="/generate.png"
          alt="Generate your links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
