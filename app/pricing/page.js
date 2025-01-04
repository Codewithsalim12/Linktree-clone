import { Poppins } from "next/font/google";

// Import the Poppins font with desired configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const PricingPage = () => {
  return (
    <div
      className={`${poppins.className} max-w-7xl mx-auto p-5 pt-72 bg-[#F3F3F1]`}
    >
      <h1 className="px-5 text-6xl font-extrabold text-center mb-4">
        Boost your digital presence and monetize your socials
      </h1>
      <h2 className="text-xl font-light text-center px-8 text-gray-600 mb-10">
        Save up to 30% on annual plans
      </h2>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Free Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Free</h3>
          <p className="text-xl font-bold mb-6">Rs.0</p>
          <p className="text-gray-600 mb-6">Free, forever</p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Join for free
          </a>
          <h4 className="text-lg font-semibold mt-6">Key Features:</h4>
          <ul className="text-gray-600 mt-2 mb-4">
            <li>Unlimited links</li>
            <li>Multi-factor authentication for added security</li>
            <li>Drive traffic with QR codes</li>
            <li>Connect all your social profiles</li>
            <li>Sell products with the Shop tab</li>
          </ul>
        </div>

        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Starter</h3>
          <p className="text-xl font-bold mb-6">Rs.150 INR/month</p>
          <p className="text-gray-600 mb-6">Billed annually</p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Get Starter
          </a>
          <h4 className="text-lg font-semibold mt-6">Includes Free Plan +:</h4>
          <ul className="text-gray-600 mt-2 mb-4">
            <li>Schedule links to go live at specific dates/times</li>
            <li>Add animations to highlight important links</li>
            <li>Customize button colors and fonts</li>
            <li>Spotlight links for better visibility</li>
            <li>View link performance and track revenue</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Pro</h3>
          <p className="text-xl font-bold mb-6">Rs.300 INR/month</p>
          <p className="text-gray-600 mb-6">Billed annually</p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Try Pro for free
          </a>
          <h4 className="text-lg font-semibold mt-6">
            Includes Starter Plan +:
          </h4>
          <ul className="text-gray-600 mt-2 mb-4">
            <li>Customizable Linktree design</li>
            <li>Location-based analytics</li>
            <li>Email & phone number collection</li>
            <li>
              Marketing integrations (Google Analytics, Zapier, Mailchimp)
            </li>
            <li>More engagement features</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>
          <p className="text-xl font-bold mb-6">Rs.900 INR/month</p>
          <p className="text-gray-600 mb-6">Billed annually</p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Get Premium
          </a>
          <h4 className="text-lg font-semibold mt-6">Includes Pro Plan +:</h4>
          <ul className="text-gray-600 mt-2 mb-4">
            <li>Tailored onboarding and setup</li>
            <li>Priority customer support (4hrs response time)</li>
            <li>Unlimited historical insights</li>
            <li>Export analytics data</li>
            <li>Dedicated expert support (email/video calls)</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-6">Explore all features</h3>
        <p className="text-gray-600 mb-4">
          Trusted by millions of creators, influencers, and businesses
          worldwide.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
