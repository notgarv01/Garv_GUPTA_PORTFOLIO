
import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AllTechnologies = () => {

   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-primary px-4 sm:px-10 py-20 overflow-x-hidden">
      <motion.div className="w-full text-center mb-12">
        <p className={styles.sectionSubText}>All Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((tech) => (
          <div
            className="sm:w-36 w-28 h-36 flex flex-col items-center justify-between bg-tertiary p-4 rounded-2xl border border-white/5 hover:border-[#915eff]/50 transition-all duration-300"
            key={tech.name}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-white text-sm font-medium mt-3 text-center truncate w-full">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div
          onClick={() => navigate("/#skills")}
          className="inline-block mt-4 px-6 py-2 bg-[#915eff] text-white rounded-xl shadow-lg hover:bg-[#7d48f5] transition"
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default AllTechnologies;
