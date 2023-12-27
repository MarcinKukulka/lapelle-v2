'use client';

import { type ColumnDef } from '@tanstack/react-table';

export type Treatment = {
	title: string;
	treatmentTable: TreatmentTable[];
};

export type TreatmentTable = {
	id: string;
	price: number;
	name: string;
};

export const columns: ColumnDef<TreatmentTable>[] = [
	{
		accessorKey: 'name',
		header: 'Zabieg',
	},
	{
		accessorKey: 'price',
		header: 'Cena',
	},
];
