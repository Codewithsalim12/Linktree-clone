import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



const poppins = Poppins({
  subsets: ["latin"], // Ensures Latin characters are included
  weight: ["400", "500", "700"], // These weights are available for Poppins
  display: "swap", // Improves font display performance
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} bg-[#E9C0E9] border-t border-gray-400 py-8`}
    >
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
          <Link
            href="/templates"
            className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            Templates
          </Link>
          <Link
            href="/marketplace"
            className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            Marketplace
          </Link>
          <Link
            href="/discover"
            className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            Discover
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            Pricing
          </Link>
          <Link
            href="/learn"
            className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            Learn
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.facebook.com/linktree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </a>
          <a
            href="https://www.twitter.com/linktree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </a>
          <a
            href="https://www.instagram.com/linktree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/linktree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </a>
        </div>

        {/* Acknowledgment Text */}
        <div className="text-center text-gray-500 text-xs sm:text-sm md:text-base">
          <p className="mb-2">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present, and emerging.
          </p>
          <p>
            Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood
            VIC 3066
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
