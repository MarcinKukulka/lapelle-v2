type ContactFormEmailProps = {
	username: string;
	email: string;
	message: string;
	subject: string;
};

export const ContactFormEmail = ({
	username,
	email,
	message,
	subject,
}: Readonly<ContactFormEmailProps>) => (
	<div className="p-4">
		<h2>
			Wiadomość od: <strong>{username}</strong>
		</h2>
		<p className="text-lg">Z adresu email: {email}</p>
		<h2 className="text-xl">Temat:</h2>
		<p className="pb-4">{subject}</p>
		<h2>Treść wiadomości: </h2>
		<p>{message}</p>
	</div>
);
