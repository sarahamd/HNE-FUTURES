import * as yup from "yup";

const ContactFormSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(30, "Please enter a valid name")
    .required("Please specify your first name"),
  lastName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(30, "Please enter a valid name")
    .required("Please specify your last name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your Email so we can reply to you"),
  message: yup
    .string()
    .trim()
    .max(500, "The message cannot contain more than 500 characters")
    .required("Please specify how we can help you"),
});

export default ContactFormSchema;
export type ContactForm = yup.InferType<typeof ContactFormSchema>;
