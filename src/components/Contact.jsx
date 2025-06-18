import React from "react";
import emailIcon from "../assets/email.png"
import linkedinIcon from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center h-[70vh]">
      <p className="text-center">Get in Touch</p>
      <h1 className="text-[3rem] text-center font-semibold">Contact Me</h1>
      <div className="flex flex-wrap justify-center rounded-2xl border border-[rgb(163,163,163)] bg-[rgb(250,250,250)] mx-auto my-8 p-6">
        <div className="flex items-center justify-center">
            <img
                src={emailIcon}
                alt="Email icon"
                className="cursor-default h-10"
            />
          <p>
            <a href="mailto:JohnsonChen12345@gmail.com">JohnsonChen12345@gmail.com</a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 m-4">
            <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="cursor-default h-10"
          />
          <p>
            <a href="https://linkedin.com/in/jchen22002" target="_blank" rel="noopener noreferrer">
              jchen22002
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
