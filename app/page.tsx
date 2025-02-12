'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Komoda from "@/components/komoda";
import Accordion from "@/components/accordion";
import { Button } from "@mui/material";


export default function Home() {

    const router = useRouter();

    function SendToRegister() {
        router.push('/user/register')
    }

    return (
        <>
            <Komoda />

            <div className='p-5'>
                <h1 className='text-2xl font-bold'>
                    Pratite svoje zdravstvene podatke, zakazujte preglede i organizujte terapije na jednom mestu.
                    <br /><span className='text-blue-500'>Bez stresa</span>, <span className='text-blue-500'>Bez papira</span> - samo jednostavno i efikasno.
                </h1>
                <h2 className='text-md'>
                    <span className='text-blue-500 text-xl underline underline-offset-2'>MediPlan</span> je revolucionarna aplikacija koja Vam omogućava
                    da sve svoje zdravstvene informacije držite organizovano i na jednom mestu.
                    Bez obzira da li pratite svoje zdravstvene podatke, zakazujete preglede ili upravljate terapijama,
                    <span className='text-blue-500'> MediPlan</span> je tu da Vam olakša život.
                </h2>
            </div>

            <div className='border border-grey-500 rounder-lg py-3 px-5'>

                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-xl font-bold'>Šta sve možete raditi sa MediPlan-om?</h1>
                    <h1 className='text-xl font-bold'>Zašto izabrati MediPlan?</h1>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='w-1/2'>
                        <Accordion />
                    </div>

                    <div className='w-1/2'>
                        <ul className='list-disc list-inside text-md text-left'>
                            <li>Jednostavno korišćenje - intuitivni dizajn omogućava svima da koriste aplikaciju bez napora.</li>
                            <li>Ušteda vremena - Zaboravite na papirne kartona i čekanje u redovima.</li>
                            <li>Personalizovano iskustvo - MediPlan prilagođava se Vašim potrebama i pruža Vam podršku koja Vam je potrebna</li>
                            <li>Dostupno 24/7 - Vaše zdravlje je važno u svakom trenutku, a MediPlan agenti su uvek tu za Vas.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-center mt-5 flex flex-col items-center gap-5'>
                <h1 className='text-3xl'>Započnite svoj put ka boljem zdravlju već danas!</h1>
                <p className='text-md'>
                    Registrujte se na <span>MediPlan</span> i otkrijte kako je lako biti organizovan i informisan
                    o svom zdravlju. Vaše zdravlje zaslužuje najbolju pažnju, a mi smo tu da Vam to omogućimo.
                </p>
                <Button variant='contained' onClick={SendToRegister}>Registruj se</Button>
            </div>
        </>
    );
}

// NAZIV: MediPlan
// MOTO: Vaš digitalni pomoćnik za zdravlje
