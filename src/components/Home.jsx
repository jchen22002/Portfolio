import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import resumePDF from "../assets/Johnson_Chen_Resume.pdf";

const Home = () => {
  return (
    <motion.section
      id="profile"
      className="flex justify-center gap-20 h-[80vh] item-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Picture */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 80 }}
      >
        <img src={profilePic} alt="Johnson Chen Profile Picture" className="rounded-full" />
      </motion.div>

      {/* Profile Background */}
      <motion.div
        className="self-center text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 80 }}
      >
        <p className="font-semibold">Hey there! My name is</p>
        <h1 className="text-[3rem] text-center">Johnson Chen</h1>
        <p className="font-semibold text-2xl mb-4">[Software Developer]</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            className="font-semibold transition-all duration-300 p-4 w-45 rounded-full border border-gray-600 bg-transparent hover:border-white hover:bg-neutral-800 hover:text-white"
            onClick={() => window.open(resumePDF)}
          >
            Download CV
          </button>
          <button
            className="font-semibold transition-all duration-300 p-4 w-45 rounded-full border border-gray-600 bg-neutral-800 text-white hover:bg-black"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Info
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 gap-4">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="cursor-pointer h-8"
            onClick={() => window.open("https://www.linkedin.com/in/jchen22002")}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="cursor-pointer h-8"
            onClick={() => window.open("https://github.com/jchen22002")}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
