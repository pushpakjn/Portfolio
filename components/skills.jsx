"use client";

import React from "react";
import { SkillsData } from "../constants/data";
import { animate, motion } from "framer-motion";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";

const Skills = () => {
  const { ref } = useActiveSectionHook({
    sectionName: "Skills",
    threshold: 0.4,
  });

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
      },
    }),
  };

  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      ref={ref}
      id="Skills"
    >
      <h2 className="text-3xl mb-6 font-bold text-gray-800 dark:text-gray-50 capitalize">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {SkillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-black/[0.1] rounded-xl px-5 py-3 dark:bg-gray-300"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
