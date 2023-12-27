import { type Treatment, columns } from './columns';
import { DataTable } from './data-table';
import { Heading } from '@/components/ui/heading';
import { SectionWrapper } from '@/components/ui/section-wrapper';

async function getData(): Promise<Treatment[]> {
	return [
		{
			title: 'Zabieg',
			treatmentTable: [
				{ id: '728ed52f', price: 100, name: 'Głowa' },
				{ id: '728ed52f', price: 100, name: 'Głowa' },
			],
		},
		{
			title: 'Drugi zabieg',
			treatmentTable: [
				{ id: '728ed52f', price: 100, name: 'Głowa' },
				{ id: '728ed52f', price: 100, name: 'Głowa' },
			],
		},
	];
}

export default async function PriceListPage() {
	const data = await getData();
	return (
		<section>
			<SectionWrapper>
				<Heading
					textColor="text-black"
					text="Cennik"
					lineColor="border-black"
				/>
				<div className="flex flex-col items-center">
					{data.map((treatment) => {
						return (
							<div
								className="mb-12 w-full max-w-lg px-8 md:w-1/2"
								key={treatment.treatmentTable[0].id}
							>
								<h2 className="mb-4 text-center text-2xl font-semibold">
									{treatment.title}
								</h2>
								<DataTable columns={columns} data={treatment.treatmentTable} />
							</div>
						);
					})}
				</div>
			</SectionWrapper>
		</section>
	);
}
