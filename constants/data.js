import React from "react";
import AiImageGeneratorImage from "@/assets/images/AI-image-generator.png";
import CPhints from "@/assets/images/CPhints.png";
import ZeroW from "@/assets/images/ZeroW.png";
import FashonNovel from "@/assets/images/FashionNovel.png";
import CPHints from "@/assets/images/CP-Hints.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { Html } from "next/document";

export const links = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  // {
  //   name: "Experience",
  //   href: "#Experience",
  // },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export const ProjectsData = [
  {
    name: "CP Hints",
    description:
      "The project aims to create an online platform where users can access and contribute coding hints for various platforms.",
    image: CPHints,
    tags: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "Redis",
      "Sendgrid API"
    ],
    link: "https://www.cphints.me/",
  },
  {
    name: "ZeroW",
    description:
      "A FullStack web application that connects excess food donors with NGOs or volunteers to reduce food wastage.",
    image: ZeroW,
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Twilio API",
    ],
    link: "https://zerow1.vercel.app/",
  },
  {
    name: "FashionNovel",
    description:
      "A Fullstack E-commerce web application that allows users to buy products using Paypal payment gateway and also allows admin to manage the website.",
    image: FashonNovel,
    tags: ["Html", "CSS", "JavaScript", "React","Redux", "Node.js", "MongoDB", "Paypal API"],
    link: "https://fashionnovel.vercel.app/",
  },
];

export const SkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "REST API",
  "Postman",
  "bootstrap",
  "Material UI",
  "VS Code",
  "Git",
  "GitHub",
  "Figma",
  "Web Designing",
  "JWT",
  "C++"
];

export const experiencesData = [
 
];
