import { type TreatmentFragment } from '@/gql/graphql';

export type TreatmentTitleProps = {
	treatmentsTitle: TreatmentFragment[];
};

export const TreatmentList = ({ treatmentsTitle }: TreatmentTitleProps) => {
	return (
		<div className="top-28 mt-8 h-full min-w-min bg-gold p-6 sm:sticky">
			<h2 className="text-2xl font-bold">Zabiegi</h2>
			<ul className="mt-4 list-outside list-[circle]">
				{treatmentsTitle.map(({ title, id }) => {
					return (
						<li className="ml-5 p-1 lowercase sm:whitespace-nowrap" key={id}>
							{title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
