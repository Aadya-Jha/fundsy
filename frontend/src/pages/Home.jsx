import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Badge = ({ text }) => (
  <span className="bg-white/70 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm">
    {text}
  </span>
);

const InfoCard = ({ title, description, buttonText, badge, link, bgColor }) => (
  <div
    className={`w-72 h-72 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-gray-200 ${bgColor}`}
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {badge && <Badge text={badge} />}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
    <Link
      to={link}
      className="mt-4 inline-block self-start bg-purple-600 text-gray-500 text-sm font-semibold px-4 py-2 rounded-full hover:bg-purple-700 transition"
    >
      {buttonText} →
    </Link>
  </div>
);

const Home = () => {
  const cards = [
    {
      title: "Fund a Student",
      description:
        "Support underprivileged students by contributing to verified campaigns.",
      buttonText: "Explore",
      badge: "Live",
      link: "/explore",
      bgColor: "bg-purple", // matte lavender
    },
    {
      title: "Transparent Donations",
      description:
        "Track every rupee with blockchain to ensure donations reach the right place.",
      buttonText: "How it Works",
      badge: "Blockchain",
      link: "/about",
      bgColor: "bg-olive", // matte olive
    },
    {
      title: "Need Help?",
      description:
        "Got questions? Visit our FAQ section for all the guidance you need.",
      buttonText: "FAQs",
      badge: "Support",
      link: "/FAQ",
      bgColor: "bg-pink", // matte yellow
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="bg-beige-light min-h-[90vh] flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl p-10 text-center max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink mb-6 animate-fade-in">
            Empower Education, One Block at a Time.
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-8">
            <span className="font-extralight">
              Fund a scholar, shape the future.
            </span>
          </p>
          <a
            href="/about"
            className="inline-block bg-olive hover:bg-purple text-gray-900 hover:text-white px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Info Cards Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-16">
          A Better Way to{" "}
          <span className="text-purple-600">Empower Education</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>

      {/* Footer directly inside Home */}
      <footer className="bg-beige-dark text-gray-800 py-10 px-6  shadow-inner ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="flex-1">
            <h3 className="text-2xl text-vi font-extrabold text-purple-700 mb-2">
              Fundsy
            </h3>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Empowering education through transparent, blockchain-powered
              funding.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">
                Quick Links
              </h4>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:text-purple-700 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-purple-700 transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/explore"
                    className="hover:text-purple-700 transition"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a href="/FAQ" className="hover:text-purple-700 transition">
                    FAQs
                  </a>
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
                    support@fundsy.org
                  </a>
                </li>
                <li>Phone: +91 98765 43210</li>
                <li>Location: Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10 pt-6 border-t border-gray-200">
          © {new Date().getFullYear()} Fundsy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
