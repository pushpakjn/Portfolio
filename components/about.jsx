"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const { ref } = useActiveSectionHook({
    sectionName: "About",
    threshold: 0.4,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.7], [100, 0]);

  return (
    <div id="About" ref={targetRef} className="scroll-mt-28">
      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        style={{ opacity, y }}
        transition={{ delay: 2 }}
        ref={ref}
      >
        {/* <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 capitalize">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I recently graduated with a Bachelor's degree from the Maharaja Agrasen Institute of Technology, Delhi, in 2024.
          I thrive on tackling new challenges and continuously expanding my skill set.
          {/* I'm a Full-Stack web developer
          with a passion for building beautiful websites and applications. I'm
          currently pursuing my Bachelor's degree at the Maharaja Agrasen
          Institute of Technology, Delhi. */}
        {/*</p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
         My passion for full-stack development drives my expertise in the {" "}
          <span className="font-bold">MERN </span> stack
          and  <span className="font-bold">Spring Boot </span>,
           allowing me to create dynamic and robust web applications. 
          In addition to my technical skills, I enjoy playing basketball and cricket, which help me maintain a balanced lifestyle.

        </p> */}
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 capitalize">
  About Me
</h2>

<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
  I’m a <span className="font-bold">Software Engineer at Tata Consultancy Services (TCS)</span>, 
  working on the Government of India’s Passport Seva V2.0 project in the Search & Analytics domain. 
  My role involves building and maintaining scalable backend microservices using 
  <span className="font-bold"> Java, Spring Boot, and REST APIs</span>.
</p>

<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
  I graduated with a <span className="font-bold">B.Tech degree</span> from 
  Maharaja Agrasen Institute of Technology, Delhi (2024), where I developed a strong interest 
  in <span className="font-bold">backend engineering, data systems,</span> and 
  <span className="font-bold"> system design</span>. I also work with modern tools like the 
  <span className="font-bold"> ELK Stack (Elasticsearch, Logstash, Kibana)</span> and 
  <span className="font-bold"> PostgreSQL</span> to handle analytics and data processing pipelines.
</p>

<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
  Along with backend development, I have hands-on experience with 
  <span className="font-bold"> React.js</span> for building interactive user interfaces. 
  Outside of coding, I enjoy playing <span className="font-bold">basketball</span> and 
  <span className="font-bold">cricket</span>, which help me stay focused and maintain a balanced lifestyle.
</p>

      </motion.section>
    </div>
  );
};

export default About;
