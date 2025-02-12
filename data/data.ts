// RUCNA BAZA PODATAKA. KASNIJE NAPRAVITI SQL I POVEZATI GA SA API-JEM

import { Pregled } from "@/lib/definitions";

export const data: Pregled[] = [
    {
        lekar: 'Dusan Strbac',
        tip_lekar: 'Lekar opste prakse',
        klinika: 'Dom Zdravlja Zvezdara',
        adresa: 'Nebojsina 21',
        grad: 'Uzice',
    },
    {
        lekar: 'Marko Markovic',
        tip_lekar: 'Psihijatar',
        klinika: 'Dr. Laza Lazarevic',
        adresa: 'Grcica Milenka 412',
        grad: 'Beograd',
    },
    {
        lekar: 'Stefan Savic',
        tip_lekar: 'Neurohirurg',
        klinika: 'Institut za majku i dete',
        adresa: 'Ustanicka 128',
        grad: 'Zrenjanin',
    },
    {
        lekar: 'Nemanja Markovic',
        tip_lekar: 'Kardiovaskularni hirurg',
        klinika: 'Urgentni Centar Beograd',
        adresa: 'Kozarceva 18',
        grad: 'Pozarevac',
    },
    {
        lekar: 'Matija Nedeljkovic',
        tip_lekar: 'Neurolog',
        klinika: 'Media Group Klinika',
        adresa: 'Dr. Velizara Kosanovica 1',
        grad: 'Beograd',
    },
    {
        lekar: 'Milan Kovac',
        tip_lekar: 'Neurolog',
        klinika: 'MediPlan Klinika',
        adresa: 'Kraljeva 12',
        grad: 'Zagreb',
    },
    {
        lekar: 'Milutin Milankovic',
        tip_lekar: 'Oftamolog',
        klinika: 'MediPlan Klinika',
        adresa: 'Nebojsina 4',
        grad: 'Novi Sad',
    }
];