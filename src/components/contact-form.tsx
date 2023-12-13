'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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

const formSchema = z.object({
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

export const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			subject: '',
			message: '',
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const resetForm = () => {
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-2/3 max-w-screen-xl space-y-4 md:w-1/3"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Imię</FormLabel>
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
							<FormLabel>E-mail</FormLabel>
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
							<FormLabel>Temat</FormLabel>
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
							<FormLabel>Wiadomość</FormLabel>
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
					<Button type="submit">Wyślij</Button>
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
