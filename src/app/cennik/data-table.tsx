'use client';

import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader className="bg-black text-gold">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow className="hover:bg-black/95" key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										className="p-3 text-lg text-gold even:text-right"
										key={header.id}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								className="even:bg-gold/10 hover:cursor-pointer hover:bg-gold/70 "
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
							>
								{row.getVisibleCells().map((cell) => (
									<TooltipProvider key={cell.id}>
										<Tooltip>
											<TooltipTrigger asChild>
												<TableCell
													className='even:text-nowrap even:text-right even:after:content-["zł"]'
													key={cell.id}
												>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext(),
													)}
													{<TooltipContent>W budowie...</TooltipContent>}
												</TableCell>
											</TooltipTrigger>
										</Tooltip>
									</TooltipProvider>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								Brak wyników
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
