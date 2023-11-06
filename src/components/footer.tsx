export const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<footer className=" h-18 flex flex-col items-center justify-center gap-y-4 bg-black text-gold">
			<p className="py-2 text-sm">
				{date}
				&nbsp; La Pelle - Nowoczesna Kosmetologia Agnieszka Trylińska
			</p>
			<p className="py-2 text-xs">Created by MK</p>
		</footer>
	);
};
