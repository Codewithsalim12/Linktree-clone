import React from "react";
import { templateCategories } from "../api/data/templates";

const TemplatesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 pt-36 md:pt-72 bg-[#F3F3F1]">
      <h1 className="px-5 text-4xl md:text-6xl font-extrabold text-center mb-4">
        <p>A Linktree Template To Suit Every </p>
        <p>Brand and Creator</p>
      </h1>
      <h2 className="text-lg md:text-xl font-light text-center px-4 md:px-8 text-gray-600 mb-10">
        Different Link Apps, integrations and visual styles can help you create
        a Linktree that looks and feels like you and your brand. Explore our
        library of custom templates to grow and connect with your audience even
        more easily!
      </h2>

      {/* Browse Here section */}
      <div className="text-center mb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-5">Browse Here</h3>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <button className="bg-green-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-green-600">
            Video Creator
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-blue-600">
            Photography
          </button>
          <button className="bg-cyan-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-cyan-600">
            E-commerce
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-yellow-600">
            Local Business
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-gray-600">
            Fitness Trainer
          </button>
          <button className="bg-red-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-red-600">
            Personal Blog
          </button>
        </div>
      </div>

      {templateCategories.map((category) => (
        <div key={category.category} className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-5">
            {category.category}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Templates */}
            {category.templates.map((template) => (
              <div
                key={template.title}
                className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 md:p-6 transition-shadow duration-300"
              >
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  className="w-full h-36 md:h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-base md:text-lg font-bold">
                  {template.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {template.description}
                </p>
                <a
                  href={template.link}
                  className="text-blue-500 hover:underline font-medium text-sm md:text-base"
                >
                  View Template
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplatesPage;
