"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../constants/data";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";
import { useTheme } from "next-themes";

const Experience = () => {
  const { ref } = useActiveSectionHook({
    sectionName: "Experience",
  });
  const { theme } = useTheme();
  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      id="Experience"
      ref={ref}
    >
      <h2 className="text-3xl mb-6 font-bold text-gray-800 dark:text-gray-50 capitalize">
        Experience
      </h2>
      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.05)"}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              // date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
