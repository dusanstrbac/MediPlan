import * as React from 'react'
import { data } from '@/data/data'
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useMemo } from "react";
import { Pregled } from "@/lib/definitions";


export default function Table() {

    const columns = useMemo<MRT_ColumnDef<Pregled>[]>(
        () => [
            {
                accessorKey: 'id_pregleda',
                header: 'ID Pregleda',
                size: 150,
            },
            {
                accessorKey: 'id_pacijenta',
                header: 'ID Pacijenta',
                size: 150,
            },
            {
                accessorKey: 'datum_pregleda',
                header: 'Datum Pregleda',
                size: 150,
            },
            {
                accessorKey: 'pregledao_lekar',
                header: 'Lekar',
                size: 200,
            },
            {
                accessorKey: 'dijagnoza',
                header: 'Dijagnoza',
                size: 200,
            },
            {
                accessorKey: 'terapija',
                header: 'Terapija',
                size: 200,
            },
            {
                accessorKey: 'napomene',
                header: 'Napomene',
                size: 200,
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