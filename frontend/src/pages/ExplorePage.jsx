import React from "react";
import { motion } from "framer-motion";
import Card from "../components/card.jsx";
import img1 from "../assets/women-in-stem.jpg";
import img2 from "../assets/merit-based.jpg";
import img3 from "../assets/need-based.jpg";
import img4 from "../assets/research-and-innovation.jpg";
import img5 from "../assets/sports.jpg";
import Navbar from "../components/Navbar.jsx";

const Explore = (props) => {
  const features = [
    {
      title: "Women in STEM Scholarship",
      amount: "₹1,00,000 per student",
      time: "20 days left",
      color: "bg-[#E5F4E3]",
      image: img1,
    },
    {
      title: "Need-Based Scholarship",
      amount: "Covers tuition + ₹10,000 stipend",
      time: "30 days left",
      color: "bg-[#BBDDB7]",
      image: img3,
    },
    {
      title: "Merit-Based Scholarship",
      amount: "₹50,000 per recipient",
      time: "15 days left",
      color: "bg-[#FFF4D6]",
      image: img2,
    },
    {
      title: "Research & Innovation Grant",
      amount: "Up to ₹2,00,000",
      time: "45 days left",
      color: "bg-[#E4D1FD]",
      image: img4,
    },
    {
      title: "Sports Scholarship",
      amount: "Full tuition + training support",
      time: "10 days left",
      color: "bg-[#FFE8AD]",
      image: img5,
    },
  ];

  return (
    <div>
      <div className="bg-[#fefcf8] min-h-screen px-4 overflow-x-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-purple text-5xl font-sans sm:px-5 pl-4 pr-4 font-extrabold text-center py-4"
          style={{ textShadow: "0 0 6px rgba(255, 255, 255, 0.3)" }}
        >
          Fundsy Scholarship Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-lg font-sans  text-center pl-4 pr-4 sm:px-8 "
        >
          Unlocking education through verified scholarships. Every grant is
          transparently tracked for fairness and impact
        </motion.p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className={`transition-all duration-300`}
            >
              <Card
                source={feature.image}
                title={feature.title}
                amount={feature.amount}
                time={feature.time}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
