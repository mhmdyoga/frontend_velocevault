import { z } from 'zod';

export const RegisterSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters long",
    }).max(15),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }).max(20),
    confPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }).max(20),
});

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }).max(20),
});

export const ResetPasswordSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }).max(20),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;