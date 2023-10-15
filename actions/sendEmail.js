"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  try {
    await resend.emails.send({
      from: "From PORTFOLIO <onboarding@resend.dev>",
      to: "officialpjain@gmail.com",
      subject: "New message from portfolio",
      reply_to: senderEmail,
      text: message,
    });
  } catch (error) {
    return {
      error: error.message,
    };
  }

  return {
    error: null,
  };
};

export default sendEmail;
