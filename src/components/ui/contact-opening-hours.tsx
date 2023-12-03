const OPENING_HOURS = [
	{ day: 'poniedziałek', hours: '09:00 - 17:00' },
	{ day: 'wtorek', hours: '09:00 - 17:00' },
	{ day: 'środa', hours: '09:00 - 17:00' },
	{ day: 'czwartek', hours: '09:00 - 17:00' },
	{ day: 'piątek', hours: '09:00 - 17:00' },
	{ day: 'sobota', hours: 'nieczynne' },
	{ day: 'niedziela', hours: 'nieczynne' },
];

export const ContactOpeningHours = () => {
	return (
		<div className="m-10 h-5/6 border-2 border-gold p-10 align-middle  text-white md:m-0 md:w-5/12">
			<h2 className="mb-8 text-center text-2xl font-bold">Godziny otwarcia</h2>

			{OPENING_HOURS.map(({ day, hours }) => {
				return (
					<div
						key={day}
						className="flex justify-between text-base  md:text-sm lg:text-base"
					>
						<ul style={{}} role="list" className="flex flex-col gap-y-2">
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
