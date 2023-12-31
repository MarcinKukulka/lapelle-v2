import { z } from 'zod';

export const contactFormSchema = z.object({
	username: z.string().min(2, {
		message: 'Imię musi mieć co najmniej 2 znaki.',
	}),
	email: z.string().email({
		message: 'E-mail musi być poprawny.',
	}),
	subject: z.string().min(5, {
		message: 'Temat wiadomości musi mieć co najmniej 5 znaków.',
	}),
	message: z.string().min(10, {
		message: 'Wiadomość musi mieć co najmniej 10 znaków.',
	}),
});
