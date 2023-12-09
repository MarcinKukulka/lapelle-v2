import { TreatmentArticle } from '@/components/ui/treatment-article';
import { TreatmentList } from '@/components/ui/treatment-list';

export default function Zabiegi() {
	return (
		<div className="mx-auto flex max-w-screen-xl">
			<TreatmentList />
			<TreatmentArticle />
		</div>
	);
}
