'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { toast } from 'sonner';
import { Textarea } from '@/ui/textarea';
import { Button } from '@/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { sendEmail } from '@/app/actions';
import { contactFormSchema } from '@/lib/schema';

export const ContactForm = () => {
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			username: '',
			email: '',
			subject: '',
			message: '',
		},
	});

	const resetForm = () => {
		form.reset();
	};

	async function onSubmit(values: z.infer<typeof contactFormSchema>) {
		const result = await sendEmail(values);
		if (result?.success) {
			toast.success('Wiadomość została wysłana!');
			resetForm();
			return;
		} else {
			toast.error(
				'Wystąpił błąd podczas wysyłania wiadomości! Spróbuj ponownie później.',
			);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-2/3  max-w-2xl space-y-8"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg">Imię</FormLabel>
							<FormControl>
								<Input
									className="bg-gold/10"
									placeholder="Wpisz swoje imię"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg">E-mail</FormLabel>
							<FormControl>
								<Input
									className="bg-gold/10"
									placeholder="Podaj swój adres e-mail"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg">Temat</FormLabel>
							<FormControl>
								<Input
									className="bg-gold/10"
									placeholder="Podaj temat swojej wiadomości"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg">Wiadomość</FormLabel>
							<FormControl>
								<Textarea
									className="bg-gold/10"
									placeholder="Napisz swoją wiadomość"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-between">
					<Button
						disabled={form.formState.isSubmitting}
						className="text-lg"
						type="submit"
					>
						Wyślij
					</Button>
					<Button
						variant="ghost"
						className="underline underline-offset-4 hover:bg-gold/40"
						type="reset"
						onClick={resetForm}
					>
						Wyczyść formularz
					</Button>
				</div>
			</form>
		</Form>
	);
};
