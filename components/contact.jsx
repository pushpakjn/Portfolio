"use client";

import React from "react";
import { motion } from "framer-motion";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";
import sendEmail from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useActiveSectionHook({
    sectionName: "Contact",
    threshold: 0.75,
  });

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl mb-6 font-bold text-gray-800 dark:text-gray-50 capitalize">
        Contact Me
      </h2>
      <p>
        Please Mail me directly at{" "}
        <a className="underline" href="mailto:officialpjain@gmail.com">
          officialpjain@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (FormData) => {
          const { error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
          } else {
            toast.success("Email sent successfully!");
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
