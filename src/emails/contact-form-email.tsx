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
	<div>
		<h2>Temat {subject}</h2>
		<p>
			Wiadomość od: <strong>{username}</strong> z adresu email: {email}
		</p>
		<h2>Treść wiadomości</h2>
		<p>{message}</p>
	</div>
);
