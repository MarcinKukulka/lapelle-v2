import { columns } from './columns';
import { DataTable } from './data-table';
import { executeGraphql } from '@/api/grapqhlApi';
import { Heading } from '@/components/ui/heading';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { PriceListDocument } from '@/gql/graphql';

export default async function PriceListPage() {
	const { priceLists } = await executeGraphql(PriceListDocument);
	return (
		<section className="min-h-screen">
			<SectionWrapper>
				<Heading variant="black">Cennik</Heading>
				<div className="flex flex-col items-center">
					{priceLists.map((treatment) => {
						return (
							<div
								className="mb-12 w-full max-w-3xl px-8 "
								key={treatment.treatmentTable[0].id}
							>
								<h2 className="mb-4 text-center text-2xl font-semibold">
									{treatment.title}
								</h2>
								<DataTable
									columns={columns}
									data={treatment.treatmentTable.map((item) => ({
										...item,
										treatmentTable: [item],
									}))}
								/>
							</div>
						);
					})}
				</div>
			</SectionWrapper>
		</section>
	);
}
