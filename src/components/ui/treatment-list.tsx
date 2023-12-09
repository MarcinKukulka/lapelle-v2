const TREATMENTS = [
	{ name: 'zabieg 1', id: 1 },
	{ name: 'zabieg 2', id: 2 },
	{ name: 'zabieg 3', id: 3 },
	{ name: 'zabieg 4', id: 4 },
	{ name: 'zabieg 5', id: 5 },
];

export const TreatmentList = () => {
	return (
		<div className="sticky top-28 mt-8 h-full min-w-min bg-gold p-6">
			<h2 className="text-2xl font-bold">Zabiegi</h2>
			<ul className="mt-4 list-outside list-[circle]">
				{TREATMENTS.map(({ name, id }) => {
					return (
						<li className="ml-5 break-words p-1" key={id}>
							{name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
