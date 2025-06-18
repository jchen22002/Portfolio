import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-25 md:pt-5 relative ">
      <p className="text-center">Explore My</p>
      <h1 className="text-[3rem] text-center font-semibold">Experience</h1>

      <div className="flex justify-center flex-col">
        <div className="flex gap-8 flex-col md:flex-row about-containers">

          {/* Work History */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="p-6 flex-1 bg-white rounded-2xl border border-gray-400"
          >
            <h2 className="text-gray-600 font-semibold text-[1.75rem] mb-8 text-center">Work History</h2>
            <div className="flex flex-wrap flex-row justify-around gap-10 text-left">
              <div className="flex gap-4 items-start">
                <div>
                  <h3 className="font-semibold">VSSportsGaming - Web Developer</h3>
                  <p className="text-sm text-gray-600 italic">New York, NY · Sep 2024 - Dec 2024</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                    <li>Collaborated on a multi-page website using HTML, CSS, JavaScript, and Bootstrap.</li>
                    <li>Deployed via Hostinger with a custom domain; completed within a 4-month deadline.</li>
                    <li>Maintained 99.9% uptime, reached 300+ visitors, and launched bug-free.</li>
                  </ul>
                  <br />
                  <h3 className="font-semibold">IT Services LLC - Web Development Intern</h3>
                  <p className="text-sm text-gray-600 italic">New York, NY · Jul. 2022 - Aug. 2022</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                    <li>Contributed in an 8-person team to enhance the company's landing page by implementing user authentication features and improving front-end design and functionality using HTML, CSS, and JavaScript.</li>
                    <li>Implemented backend features using Node.js to handle newsletter signups, contact form submissions with email notifications, and cookie acknowledgment, with all user data stored in MongoDB.</li>
                    <li>Organized and carefully managed the transfer of over 400 files from a local computer to the remote production server using FileZilla, ensuring 100% accuracy and data integrity throughout deployment.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="p-6 flex-1 bg-white rounded-2xl border border-gray-400 text-center"
          >
            <h2 className="text-gray-600 font-semibold text-[1.75rem] mb-8 text-center">Skills</h2>
            <div className="flex flex-wrap flex-row justify-around gap-10 text-left">
              <div className="space-y-4 text-left">
                {/* Languages */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "Python", "C++", "SQL", "Java"].map(skill => (
                      <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks / Libraries */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Express.js", "Next.js", "Bootstrap", "Processing", "JQuery", "Matplotlib", "Tensorflow", "Flask", "Sklearn"].map(skill => (
                      <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Visual Studio", "VS Code", "MongoDB", "Git", "GitHub", "npm"].map(tool => (
                      <span key={tool} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Firebase", "API", "Vercel"].map(tech => (
                      <span key={tech} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
