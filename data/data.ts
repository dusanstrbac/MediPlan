// RUCNA BAZA PODATAKA. KASNIJE NAPRAVITI SQL I POVEZATI GA SA API-JEM

import { Pregled } from "@/lib/definitions";
import { BazaPodataka } from "@/lib/definitions";

export const baza: BazaPodataka[] = [
    {
        id: 1,
        ime_pacijenta: 'Dusan Strbac',
        razlog: 'Bol u usima',
        adresa: 'Nebojsina 21',
        grad: 'Uzice',
    },
    {
        id: 2,
        ime_pacijenta: 'Dusan Markovic',
        razlog: 'Bol u grudima',
        adresa: 'Svetog Klimenta 3',
        grad: 'Beograd',
    },
    {
        id: 3,
        ime_pacijenta: 'Nebojsa Markovic',
        razlog: 'Bol u usima',
        adresa: 'Nebojsina 21',
        grad: 'Uzice',
    }
];



export const data: Pregled[] = [
    {
        id_pregleda: 1,
        id_pacijenta: 10,
        datum_pregleda: '12.02.2024',
        pregledao_lekar: 'Marko Markovic',
        dijagnoza: 'Glavobolja',
        terapija: 'Brufen 200mg',
        napomene: 'Poseta za 2 meseca',
    },

];