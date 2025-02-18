'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EqualizerIcon from '@mui/icons-material/Equalizer';

// URADITI PROVERU UKOLIKO JE KORISNIK ULOGOVAN DA NE PRIKAZUJE DUGME "Uloguj se"
// UMESTO DUGMETA "Uloguj se", KADA SE KORISNIK NALAZI NA POCETNOJ STRANI DA SE KREIRA DUGME "Novi pregled"
// Opcija koja ce otvarati pop-up modal koji sluzi da korisnik unese sve potrebne informacije sa lekarskom pregleda
// Kada unese sve podatke u pop-up modalu staviti dugme "Dodaj u karton", koje ce slati sve te informaciju u bazi i ispisivati na tabli korisnika

export default function Komoda() {

    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    function SignInUser() {
        router.push('/signin')
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Divider className='bg-fern-green-300'/>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user')}>
                        <ListItemIcon>
                            <HomeIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Pocetna" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/terapije')}>
                        <ListItemIcon>
                            <CalendarMonthIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Terapije" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/metrici')}>
                        <ListItemIcon>
                            <EqualizerIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Metrika" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/podsetnici')}>
                        <ListItemIcon>
                            <NotesIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Podsetnici" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider className='bg-fern-green-300' />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/nalog')}>
                        <ListItemIcon>
                            <PersonIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Nalog" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/podesavanja')}>
                        <ListItemIcon>
                            <SettingsIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Podesavanja" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/signin')}>
                        <ListItemIcon>
                            <LogoutIcon className='text-fern-green-600'/>
                        </ListItemIcon>
                        <ListItemText primary="Odjavi se" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider className='bg-fern-green-300' />
        </Box>
    );

    const isUserLoggedIn = false;

    function CheckUserAuthentication() {
        if(isUserLoggedIn) {
            return <Button variant='contained' className='bg-fern-green-600 hover:bg-fern-green-400'>Novi pregled</Button>
        } else {
            return <Button variant='contained' onClick={SignInUser} className='bg-fern-green-600 hover:bg-fern-green-400'>Uloguj se</Button>
        }
    }

    return (
        <>
            <div className='flex justify-between items-center px-3 border-b border-gray-300'>
                <div>
                    <div className='flex items-center'>
                        <Button onClick={toggleDrawer(true)}><MenuIcon fontSize='large' className='text-fern-green-600'/></Button>
                        <h1 className='text-2xl font-bold text-fern-green-600 pb-1'>MediPlus</h1>
                        <p className='pl-5 italic text-md tracking-wide'>Vaš digitalni pomoćnik za zdravlje</p>
                    </div>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <h1 className='text-center py-2 text-2xl font-bold text-fern-green-600'>MediPlus</h1>
                        {DrawerList}
                    </Drawer>
                </div>

                <div>
                    <CheckUserAuthentication />
                </div>
            </div>
        </>
    )
}