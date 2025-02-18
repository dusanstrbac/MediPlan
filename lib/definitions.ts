// Eksportovati definicije i njihove tipove

import {RowDataPacket} from "mysql2";

export type Pregled = {
    id_pregleda: number;
    id_pacijenta: number;
    datum_pregleda: string;
    pregledao_lekar: string;
    dijagnoza: string;
    terapija: string;
    napomene: string;
}

export type BazaPodataka = {
    id : number;
    ime_pacijenta: string;
    razlog: string;
    adresa: string;
    grad: string;
}

export type User = RowDataPacket & {
    id: number;
    email: string;
    password: string;
};