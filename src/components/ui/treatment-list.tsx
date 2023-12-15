/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { type RichTextContent } from '@graphcms/rich-text-types';
import { useState } from 'react';
import { type TreatmentFragment } from '@/gql/graphql';

type TreatmentTitleProps = {
	treatments: TreatmentFragment[];
};

const renderers = {
	h2: ({ children }: { children: React.ReactNode }) => (
		<h2 className="pb-4 text-2xl font-bold">{children}</h2>
	),
	h3: ({ children }: { children: React.ReactNode }) => (
		<h3 className="pb-4 text-2xl font-bold">{children}</h3>
	),
	h4: ({ children }: { children: React.ReactNode }) => (
		<h4 className="mt-12 text-xl font-bold">{children}</h4>
	),
	ul: ({ children }: { children: React.ReactNode }) => (
		<ul className="mt-4 flex list-disc flex-col gap-y-2 pl-4">{children}</ul>
	),
};

export const TreatmentList = ({ treatments }: TreatmentTitleProps) => {
	const [selectedTreatment, setSelectedTreatment] = useState<number>(0);

	const handleTreatmentsIndex = (index: number) => setSelectedTreatment(index);

	return (
		<div className="mx-auto flex max-w-screen-xl flex-col px-10 sm:flex-row">
			<div className="top-28 mt-8 h-full min-w-min bg-gold p-6 sm:sticky">
				<h2 className="text-2xl font-bold">Zabiegi</h2>
				<ul className="mt-4 list-outside list-[circle]">
					{treatments.map((treatment, index) => {
						const { title, id } = treatment;
						return (
							<li
								className={`ml-5 p-2 ${
									index === selectedTreatment ? 'font-semibold' : ''
								}`}
								key={id}
							>
								<button
									onClick={() => handleTreatmentsIndex(index)}
									className="text-left lowercase sm:whitespace-nowrap"
								>
									{title}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<article className="mb-10 mt-14 flex min-h-screen w-full flex-col sm:ml-10">
				<RichText
					renderers={renderers}
					content={
						treatments[selectedTreatment].treatmentContent
							?.raw as RichTextContent
					}
				/>
			</article>
		</div>
	);
};
