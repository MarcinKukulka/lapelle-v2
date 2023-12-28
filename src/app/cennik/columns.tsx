'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type PriceListFragment } from '@/gql/graphql';

export const columns: ColumnDef<PriceListFragment>[] = [
	{
		accessorKey: 'treatmentName',
		header: 'Zabieg',
	},
	{
		accessorKey: 'treatmentPrice',
		header: 'Cena',
	},
];
