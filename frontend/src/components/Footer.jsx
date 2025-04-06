import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fef9f5] text-gray-800 py-10 px-6 mt-16 shadow-inner rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo and Description */}
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold text-purple-700 mb-2">
            EduBlock
          </h3>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            Empowering education through transparent, blockchain-powered
            funding.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-purple-600 mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-purple-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-700 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="hover:text-purple-700 transition"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-purple-700 transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-purple-600 mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@edublock.org"
                  className="hover:text-purple-700 transition"
                >
                  support@edublock.org
                </a>
              </li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Bangalore, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 pt-6 border-t border-gray-200">
        © {new Date().getFullYear()} EduBlock. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
