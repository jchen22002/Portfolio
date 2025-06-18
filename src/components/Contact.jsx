import React from "react";
import { motion } from "framer-motion";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center h-[70vh]">
      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      >
        Get in Touch
      </motion.p>
      <motion.h1
        className="text-[3rem] text-center font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center rounded-2xl border border-[rgb(163,163,163)] bg-[rgb(250,250,250)] mx-auto my-8 p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        >
          <img
            src={emailIcon}
            alt="Email icon"
            className="cursor-default h-10"
          />
          <p>
            <a href="mailto:JohnsonChen12345@gmail.com">
              JohnsonChen12345@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 m-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="cursor-default h-10"
          />
          <p>
            <a
              href="https://linkedin.com/in/jchen22002"
              target="_blank"
              rel="noopener noreferrer"
            >
              jchen22002
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
