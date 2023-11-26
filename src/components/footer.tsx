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

			<p className="pb-4 text-xs">Created by MK</p>
		</footer>
	);
};
