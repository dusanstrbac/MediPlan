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
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Komoda() {

    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    function SignInUser() {
        router.push('/user/signin')
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pocetna" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/ustanove')}>
                        <ListItemIcon>
                            <LocalHospitalIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ustanove" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/zakazivanja')}>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Zakazivanja" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/podsetnici')}>
                        <ListItemIcon>
                            <NotesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Podsetnici" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/nalog')}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nalog" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/podesavanja')}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Podesavanja" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push('/user/signin')}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Odjavi se" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <div className='flex justify-between items-center px-3 border-b border-gray-300'>
                <div>
                    <div className='flex items-center'>
                        <Button onClick={toggleDrawer(true)}><MenuIcon fontSize='large'/></Button>
                        <h1 className='text-2xl font-bold text-blue-500 pb-1'>MediPlus</h1>
                        <p className='pl-5 italic text-md tracking-wide'>Vaš digitalni pomoćnik za zdravlje</p>
                    </div>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <h1 className='text-center py-2 text-2xl font-bold text-blue-500'>MediPlus</h1>
                        {DrawerList}
                    </Drawer>
                </div>

                <div>
                    <Button variant='contained' onClick={SignInUser}>Uloguj se</Button>
                </div>
            </div>
        </>
    )
}

// URADITI PROVERU UKOLIKO JE KORISNIK ULOGOVAN DA NE PRIKAZUJE DUGME "Uloguj se"