import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { User } from "@/lib/definitions";
import bcrypt from "bcryptjs";

export async function POST(req : Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ message: "Morate upisati oba polja" })
        }

        // Provera postojanja korisnika
        const checkUserSql = 'SELECT * FROM korisnici WHERE userEmail = ?'
        const [userRows] = await pool.query<User[]>(checkUserSql, [email]);

        console.log(userRows)

        // Ukoliko korisnik ne postoji
        if (userRows.length === 0) {
            return NextResponse.json( { message: "Korisnik ne postoji u bazi" }, { status: 404 } )
        }
        const user = userRows[0]
        console.log(user)

        // Provera hash lozinke
        const isMatch = await bcrypt.compare(password, user.userPassword)
        if (!isMatch) {
            return NextResponse.json( { error: 'Pogresna lozinka' }, { status: 400 } ) // STATUS CLIENT ERROR - UNAUTHORIZED
        } else {
            return NextResponse.json({ message: 'Tacna lozinka' }, { status: 200 } ) // STATUS OK
        }


    }
    catch (e) {
    console.error(e);}
}