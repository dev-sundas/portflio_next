import { z } from "zod";

export type serviceType = {
  id: number;
  image_url: string;
  heading: string;
  paragraph: string;
};

export type recentType = {
  id: number;
  image_url: string;
  heading: string;
  paragraph: string;
};

export type clientType = {
  id: number;
  image_url: string;
  heading: string;
  paragraph: string;
};

export const ContactSchema = z.object({
  name: z
    .string({ required_error: "Name cannot be empty" })
    .min(3, { message: "Name must be more then 3 letters" }),
  email: z.string({ required_error: "Email cannot be empty" }),
  subject: z.string({ required_error: "Subject cannot be empty" }),
  message: z.string({ required_error: "Message cannot be empty" }),
});

export type ContactFormType = z.infer<typeof ContactSchema>;

export const loginSchema = z.object({
  name: z
    .string({ required_error: "Name cannot be empty" })
    .min(3, { message: "Name must be more then 3 letters" }),
  password: z.string({ required_error: "password must cantain a six digits" }),
});
export type loginType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Name cannot be empty" })
    .min(3, { message: "Name must be more then 3 letters" }),
  email: z.string({ required_error: "Email cannot be empty" }),
  password: z.string({ required_error: "password must cantain a six digits" }),
  confirm_password: z.string({
    required_error: "password must cantain a six digits",
  }),
});
export type registerType = z.infer<typeof registerSchema>;

export const PersonalSchema = z.object({
  name: z.string(),
  postion: z.string(),
  image: z.string(),
  introduction: z.string(),
});

export type PersonalFormType = z.infer<typeof PersonalSchema>;

export const ServiceSchema = z.object({
  logo: z.string(),
  title: z.string(),
  descripation: z.string(),
});

export type ServiceFormType = z.infer<typeof ServiceSchema>;

export const ProjectSchema = z.object({
  image: z.string(),
  title: z.string(),
  descripation: z.string(),
  link: z.string(),
  githubLink: z.string(),
});

export type ProjectFormType = z.infer<typeof ProjectSchema>;

export const ClientFormSchema = z.object({
  name: z.string(),
  image: z.string(),
  Review: z.string(),
});

export type ClientFormType = z.infer<typeof ClientFormSchema>;
