'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
            transform: 'rotate(90deg)',
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function accordion() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography component="span">Digitalni zdravstveni karton</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Čuvajte sve važne zdravstvene podatke na jednom mestu - od istorije bolesti, alergija, vakcinacije,
                        do rezultata laboratorijskih analiza. Sve je sigurno, privatno i lako dostupno.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography component="span">Zakazivanje pregleda</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Zakazujte termine kod lekara u par klikova. MediPlan Vam omogućava da birate termine koji Vam
                        najviše odgovaraju i šalje Vam podsetnike da ne zaboravite na važne preglede.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span">Upravljanje terapijama</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Pratite svoje terapije i dobijajte podsetnike za uzimanje lekova.
                        MediPlan Vam pomaže da ostanete dosledni u lečenju i izbegnete propuste.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography component="span">Podrška za pacijente</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dobijajte personalizovane savete i preporuke za zdraviji životni stil.
                        MediPlan Vam pomaže da donosite bolje odluke za svoje zdravlje.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography component="span">Sigurnost i privatnost</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Vaši podaci su Vaši. MediPlan koristi najnovije tehnologije zaštite podataka kako bise mogli
                        da budete mirni znajući da su Vaše informacije sigurne.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
