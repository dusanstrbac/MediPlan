'use client'
import { useRouter } from 'next/navigation'
import {FormControl, Link, TextField, Button } from '@mui/material'
import React, {useState} from "react";

export default function UserSigninPage() {

    const router = useRouter()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const SignInUser = async (e: React.FormEvent) => {
        e.preventDefault()

        if(email === '' || password === '' ) {
            alert('Morate popuniti sva polja')
        }

        // Slanje na API rutu
        const response = await fetch('/api/login', {
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

        if ( response.status === 200 ) {
            router.push('/user')
        } else {
            postMessage(data.message || 'Neuspesan login')
        }
    }

    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] border border-gray-300 rounded-md p-6 flex flex-col gap-3 w-[400px] h-[400px] flex flex-col align-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Login</h1>
                <p className='text-center px-5'>Please fill up the form in order to access your account</p>
            </div>
            <div>
                <FormControl className='flex gap-3 w-full'>
                    <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
            </div>
            <div className='flex flex-col gap-2'>
                <Link className='text-right' href='signin'>Forgot Password?</Link>
                <Button variant='outlined' onClick={SignInUser}>Login</Button>
            </div>
        </div>
    )
}