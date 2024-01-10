import Link from 'next/link';

export const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<footer className="h-18 flex flex-col items-center justify-center gap-y-4 bg-black text-sm text-gold">
			<span className="flex flex-col items-center pt-4 md:flex-row">
				<p>
					{date}
					&nbsp; La Pelle -
				</p>
				<p>&nbsp; Nowoczesna Kosmetologia Agnieszka Trylińska</p>
			</span>
			<Link
				target="_blank"
				className="pb-4 text-xs"
				href={'https://www.linkedin.com/in/marcin-kuku%C5%82ka-973b3a1b7/'}
			>
				Created by MK
			</Link>
		</footer>
	);
};
