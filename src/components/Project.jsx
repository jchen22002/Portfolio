import { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/p1.png";
import project2 from "../assets/p2.png";
import project3 from "../assets/p3.png";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="pt-25 md:pt-4 relative">
      <motion.p
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Browse My Recent
      </motion.p>
      <motion.h1
        className="text-[3rem] text-center font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <div className="flex justify-center flex-col">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Project 1 */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center flex-[1_1_300px] max-w-[300px] p-4 m-2 bg-white border border-gray-400 rounded-xl box-border text-center"
          >
            <img src={project1} alt="Project 1" className="rounded-xl w-full h-[200px] object-cover" />
            <h2 className="font-semibold text-[1.75rem] my-4 text-black">Pothole-Detector</h2>
            <p className="text-sm text-gray-600 mb-2">
              An AI-powered pothole detection tool using YOLOv8, trained on annotated road images to identify and classify potholes by severity. 
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://github.com/jchen22002/pothole-detector")}
              >
                Github
              </button>
              <button
                className="font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://huggingface.co/spaces/DoomDashDevil22002/pothole-detector")}
              >
                Live Demo
              </button>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center flex-[1_1_300px] max-w-[300px] p-4 m-2 bg-[rgb(250,250,250)] border border-[rgb(163,163,163)] rounded-xl box-border text-center"
          >
            <img src={project2} alt="Project 2" className="rounded-xl w-full h-[200px] object-cover" />
            <h2 className="font-semibold text-[1.2235rem] my-4 text-black text-center">Weather-Image-Classifier</h2>
            <p className="text-sm text-gray-600 mb-2">
              Implemented image classification with ResNet50 and MobileNet models to identify various weather conditions with confidence outputs.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://github.com/jchen22002/Weather-Image-Classification")}
              >
                Github
              </button>
              <button
                className="font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://huggingface.co/spaces/DoomDashDevil22002/Weather-Image-Classification")}
              >
                Live Demo
              </button>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center flex-[1_1_300px] max-w-[300px] p-4 m-2 bg-[rgb(250,250,250)] border border-[rgb(163,163,163)] rounded-xl box-border text-center"
          >
            <img src={project3} alt="Project 3" className="rounded-xl w-full h-auto max-w-[200px]" />
            <h2 className="font-semibold text-[1.55rem] my-2 text-black text-center">MangaVision</h2>
            <p className="text-sm text-gray-600 mb-2">
              An accessibility-focused tool that uses object detection and OCR to extract and sort speech bubble text from manga pages.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://github.com/zehdi02/Senior-Design")}
              >
                Github
              </button>
              <button
                className={`font-semibold transition-all duration-300 px-4 py-2 w-32 rounded-full border ${
                  isHovered || isClicked
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-transparent text-black border-gray-400"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setIsClicked(false);
                }}
                onClick={() => setIsClicked(true)}
              >
                {isHovered || isClicked ? "N/A" : "Live Demo"}
              </button>
            </div>
          </motion.div>

          {/* Other Work Button */}
          <motion.button
            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold transition-all duration-300 px-4 py-2 w-46 rounded-full border border-gray-400 bg-transparent text-black hover:bg-gray-800 hover:text-white"
            onClick={() => window.open("https://github.com/jchen22002?tab=repositories")}
          >
            Check Out My Other Work!
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
