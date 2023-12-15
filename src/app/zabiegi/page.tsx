import { notFound } from 'next/navigation';
import { executeGraphql } from '@/api/grapqhlApi';
import { TreatmentsGetListDocument } from '@/gql/graphql';
import { TreatmentList } from '@/components/ui/treatment-list';
export default async function Zabiegi() {
	const { treatments } = await executeGraphql(TreatmentsGetListDocument);
	if (!treatments) {
		notFound();
	}
	return <TreatmentList treatments={treatments} />;
}
