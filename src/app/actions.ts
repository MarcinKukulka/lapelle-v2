'use server';

import { type z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { contactFormSchema } from '@/lib/schema';

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
	const result = contactFormSchema.safeParse(data);

	if (result.success) {
		const { email, message, subject, username } = result.data;

		try {
			const data = await resend.emails.send({
				from: `${process.env.RESEND_EMAIL_FROM}`,
				to: `${process.env.RESEND_EMAIL_TO}`,
				subject: subject,
				text: message,
				react: ContactFormEmail({ email, message, subject, username }),
			});
			return { success: true, data };
		} catch (error) {
			return { success: false, error };
		}
	}
}
