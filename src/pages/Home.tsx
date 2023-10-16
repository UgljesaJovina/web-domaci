import { useEffect } from "react";
import { CardHolder } from "../elements";
import { foodTypes } from "../jsons/foodTypes";
import "../styles/homeStyle.css";

const Home: React.FC = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container home-container">
            <h1>O Našoj Stranici</h1>
            <p>Naša stranica je posvećena istraživanju sveta hrane i kuvarstva, sa ciljem da vam pruži inspiraciju i znanje kako biste uneli čarobnost kuvanja u svoju kuhinju. Ovde ćete pronaći obilje recepata, saveta i informacija o najrazličitijim kuhinjama, jelima i tehnikama pripreme hrane.</p>
            <p>Naša stranica nudi bogat izbor recepata, bez obzira na vaše kulinarske veštine. Bez obzira da li ste početnik ili iskusni šef kuhinje, naši recepti će vam pomoći da pripremite ukusne obroke koji će vas oduševiti. Svaki recept dolazi sa jasnim uputstvima, savetima za pripremu i prelepim slikama koje će vas inspirisati.</p>
            <p>Osim toga, istražićemo različite kuhinje i kulturne aspekte hrane širom sveta. Putovaćemo kroz različite regione, otkrivati tradicionalne recepte, i deliti priče o hrani koja spaja ljude širom planete. Naš cilj je da vas inspirišemo da probate nove ukuse i da istražite raznolikost kulinarskog sveta.</p>
            <p>Uz našu stranicu, želimo da kuvanje postane ne samo svakodnevna obaveza, već i zadovoljstvo koje donosi radost i zajedništvo. Nadamo se da ćete uživati u istraživanju sveta hrane sa nama i da ćete pronaći mnogo inspiracije za svoje kulinarske avanture.</p>
            <p>Dobrodošli u našu kulinarsku zajednicu! :)</p>
            <hr />
            <h1>Šta nudimo?</h1>
            <p>Nudimo širok asortiman jela koja možete lako i brzo napraviti kod kuće kako biste mogli da krenete da tretirate vaše telo bolje već danas!</p>

            <CardHolder cards={foodTypes} />
        </div>
    );
}

export { Home }