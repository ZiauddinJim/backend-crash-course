import { email, z } from "zod";

export const LoginSchema = z.object({
  email: z.email("This field valid Email address."),
  password: z.string().min(6, "Password should be at least 6 character long"),
});

export const RegisterSchema = z.object({
  name: z.string().min(2, "Name should be at least 2 character long"),
  email: z.email("This field valid Email address."),
  password: z.string().min(6, "Password should be at least 6 character long"),
});

export const changePasswordSchema = z.object({
  password: z.string().min(6, "Password should be at least 6 character long"),
  newPassword: z
    .string()
    .min(6, "New password should be at least 6 character long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password should be at least 6 character long"),
});

export const ForgetPasswordSchema = z.object({
  email: z.email("this field should be a valid email address"),
});
