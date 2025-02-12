'use client'
import { useRouter } from 'next/navigation'
import {FormControl, Link, TextField, Button } from '@mui/material'

export default function RegisterPage() {

    const router = useRouter()

    function RegisterNewUser() {
        router.push('/user')
    }

    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] border border-gray-300 rounded-md p-6 flex flex-col gap-3 w-[400px] h-[400px] flex flex-col align-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Register</h1>
                <p className='text-center px-5'>Please fill up the form in order to register your account</p>
            </div>
            <div>
                <FormControl className='flex gap-3 w-full'>
                    <TextField label="Email" variant="outlined"/>
                    <TextField label="Password" variant="outlined"/>
                </FormControl>
            </div>
            <div className='flex flex-col gap-2'>
                <Link className='text-right' href='/user/signin'>Already have account?</Link>
                <Button variant='outlined' onClick={RegisterNewUser}>Register</Button>
            </div>
        </div>
    )
}