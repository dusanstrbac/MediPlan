import * as React from 'react'
import { data } from '@/data/data'
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from "react";
import { Pregled } from "@/lib/definitions";


export default function Table() {

    const columns = useMemo<MRT_ColumnDef<Pregled>[]>(
        () => [
            {
                accessorKey: 'lekar',
                header: 'Ime lekara',
                size: 150,
            },
            {
                accessorKey: 'tip_lekar',
                header: 'Tip lekara',
                size: 150,
            },
            {
                accessorKey: 'klinika',
                header: 'Klinika',
                size: 150,
            },
            {
                accessorKey: 'adresa',
                header: 'Adresa',
                size: 200,
            },
            {
                accessorKey: 'grad',
                header: 'Grad',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
    });

    return (
        <div className='w-full border border-gray-200'>
            <MaterialReactTable table={table} />
        </div>
    )
}