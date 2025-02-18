'use client'
import Komoda from '@/components/komoda'

export default function Metrici() {

    return (
        <>
            <Komoda />
            <div>
                Mesto gde ce stajati sve informacije o metrikama, kao i grafikama. <br />
                Mogucnost dodavanja fotografija i dodatnih tekstualnih podataka. <br />
                Za svaku novu metriku ce biti napravljen grafikom koji ce prikazivati podatke o metrikama. <br />
                Kada korisnik klikne na metriku na kom ce stajati datum upisivanja metrike, otvara pop-up modal
                na kom ce se nalazi grafik i podaci o tim metrikama. <br />
                Upisati za svakom korisnika jednu metriku koja ce da pokazuje koja je normalna vrednost tih metrika.
            </div>
        </>
    )
}
