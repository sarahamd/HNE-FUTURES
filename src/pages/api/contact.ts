import ContactFormSchema from "@/schemas/contactForm";
import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body: contactDetails } = req;
    await ContactFormSchema.validate(contactDetails);

    const msg = {
      to: process.env.EMAIL_RECEIVER || "swsolutions@hnefutures.com",
      from: process.env.EMAIL_SENDER,
      subject: "Message from the Contact Form",
      text:
        `First name: ${contactDetails.firstName}\n` +
        `Last name: ${contactDetails.lastName}\n` +
        `Email: ${contactDetails.email}\n\n` +
        `Message:\n${contactDetails.message}`,
    };
    await sgMail.send(msg);
    res.status(200).end();
  } catch (e: any) {
    console.error(e);
    console.error(e.response && e.response.body);
    res.status(400).end();
  }
}
