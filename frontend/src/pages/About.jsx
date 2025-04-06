import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Rocket, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "Transparent Crowdfunding",
    icon: <ShieldCheck size={40} className="text-purple" />,
    description:
      "All donations are traceable via blockchain, ensuring complete transparency and trust between students and donors.",
    color: "bg-[#E5F4E3]",
  },
  {
    title: "Support Real Students",
    icon: <GraduationCap size={40} className="text-purple" />,
    description:
      "Verified students from underserved communities can share their educational needs through authentic campaigns.",
    color: "bg-[#F3E8FF]",
  },
  {
    title: "Community Impact",
    icon: <Users size={40} className="text-purple" />,
    description:
      "Your donations empower not just one student but entire communities by making education accessible to all.",
    color: "bg-[#FFF4D6]",
  },
  {
    title: "Fast & Secure Giving",
    icon: <Rocket size={40} className="text-purple" />,
    description:
      "Our platform uses smart contracts and blockchain to ensure funds are transferred securely and instantly.",
    color: "bg-[#FFECEC]",
  },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-[#fefcf8] px-6 py-12 sm:px-12 md:px-20 text-gray-800">
        <section className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-purple"
          >
            Empowering Education Through Transparency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 text-center mb-14 max-w-3xl mx-auto"
          >
            Fundsy is a platform that empowers students by enabling transparent,
            blockchain-based financial support for their education. Every
            donation counts—and every rupee is accounted for.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`rounded-2xl p-6 shadow-xl ${feature.color} transition-all duration-300`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/explore"
              className="inline-block bg-purple text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-purple-dark transition duration-300 hover:scale-105"
            >
              Explore Campaigns
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default About;
