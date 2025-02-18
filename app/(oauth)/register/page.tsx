'use client'
import React, { useState } from 'react'
import { FormControl, Link, TextField, Button } from '@mui/material'
import {useRouter} from "next/navigation";


export default function RegisterPage() {

    const router = useRouter()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

   const RegisterNewUser = async (e: React.FormEvent) => {
        e.preventDefault()

       if(email === '' || password === '' ) {
            alert('Morate uneti sve podatke da bi ste registrovali nalog')
       }

       function isValidEmail(email: string) {
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           return emailRegex.test(email);
       }

       // Slanje podataka na API rutu
       const response = await fetch('/api/register', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               email,
               password
           })
       })


       const data = await response.json()
       console.log(data['message']);
       if ( response.status === 200 ) {
           if(!isValidEmail(email)) {
               alert('Pogresan format email adrese')
           } else {
               router.push('/user')
           }
       } else {
           postMessage(data.message || 'Doslo je do greske pri registraciji');
       }
   }

    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-md p-6 flex flex-col gap-3 w-[400px] h-[400px] align-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Register</h1>
                <p className='text-center px-5'>Please fill up the form in order to register your account</p>
            </div>
            <div>
                <FormControl className='flex gap-3 w-full'>
                    <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
            </div>
            <div className='flex flex-col gap-2'>
                <Link className='text-right' href='/signin'>Already have account?</Link>
                <Button variant='outlined' onClick={RegisterNewUser}>Register</Button>
            </div>
        </div>
    )
}