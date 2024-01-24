const OPENING_HOURS = [
	{ day: 'poniedziałek', hours: '09:00 - 16:00' },
	{ day: 'wtorek', hours: '09:00 - 16:00' },
	{ day: 'środa', hours: '09:00 - 16:00' },
	{ day: 'czwartek', hours: '09:00 - 16:00' },
	{ day: 'piątek', hours: '09:00 - 16:00' },
	{ day: 'sobota', hours: 'nieczynne' },
	{ day: 'niedziela', hours: 'nieczynne' },
];
// million-ignore
export const ContactOpeningHours = () => {
	return (
		<div className="mx-5 mb-10 mt-10 h-5/6 border-2 border-gold p-5 text-white md:w-5/12 md:p-10">
			<h2 className="mb-8 text-center text-2xl font-bold">Godziny otwarcia</h2>

			{OPENING_HOURS.map(({ day, hours }) => {
				return (
					<div key={day} className="flex justify-between text-sm  lg:text-base">
						<ul role="list" className="flex flex-col gap-y-2">
							<li className={day === 'piątek' ? 'mb-2' : ''}>{day}</li>
						</ul>
						<ul className="flex flex-col gap-y-2">
							<li>{hours}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
