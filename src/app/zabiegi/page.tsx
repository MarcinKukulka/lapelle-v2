import { notFound } from 'next/navigation';
import { executeGraphql } from '@/api/grapqhlApi';
import { TreatmentArticle } from '@/components/ui/treatment-article';
import { TreatmentList } from '@/components/ui/treatment-list';
import { TreatmentsGetListDocument } from '@/gql/graphql';

export default async function Zabiegi() {
	const { treatments } = await executeGraphql(TreatmentsGetListDocument);
	if (!treatments) {
		notFound();
	}

	return (
		<div className="mx-auto flex max-w-screen-xl flex-col px-10 sm:flex-row">
			<TreatmentList treatmentsTitle={treatments} />
			<TreatmentArticle />
		</div>
	);
}
