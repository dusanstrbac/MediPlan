import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { User } from "@/lib/definitions";
import bcrypt from "bcryptjs";

export async function POST(req : Request) {
    try {
        const connection = await pool.getConnection();
        const { email, password } = await req.json();
        let [userRows] = await pool.query<User[]>('SELECT * FROM korisnici WHERE userEmail = ?', [email]);

        // Provera korisnika
        const checkUserSql = 'SELECT * FROM korisnici WHERE userEmail = ?';
        [userRows] = await pool.query<User[]>(checkUserSql, [email]);

        if (userRows.length > 0) {
            return NextResponse.json( { message: 'Korisnik vec postoji u bazi' }, { status: 400 } )
        }

        // Hashovanje passworda
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await connection.query(
            'INSERT INTO korisnici (userEmail, userPassword) VALUES (?, ?)',
            [ email, hashedPassword ],
        )
        console.log(result)
        connection.release()
        return NextResponse.json( { message: 'Uspesna registracija'}, { status: 200 } )
    }
    catch (e) {
        console.error(e);
    }
}