import { v4 } from "uuid";
import { ICard } from "../types";
import GrckaSalata from "../images/salads/grcka-salata.png";
import MiksSalata from "../images/salads/miks-salata.png";
import TunaSalata from "../images/salads/tuna-salata.png";
import CezarSalata from "../images/salads/cezar-salata.png";
import PastaSalata from "../images/salads/pasta-salata.png";
import KrompirSalata from "../images/salads/krompir-salata.png";
import SopskaSalata from "../images/salads/sopska-salata.png";
import MaslineFetaSalata from "../images/salads/masline-feta-salata.png";

const salads: ICard[] = [
    {
        id: v4(),
        bgImage: GrckaSalata,
        name: "Grčka Salata",
        shortText: "Osvežavajuća grčka salata sa maslinama i feta sirom.",
        prepTime: "20 min",
        ingredients: [
            { name: "Paradajz", amount: "2 komada" },
            { name: "Krastavac", amount: "1 komad" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Masline", amount: "100g" },
            { name: "Feta sir", amount: "150g" },
            { name: "Maslinovo ulje", amount: "2 kašike" },
        ],
        prepInstructions: [
            "Iseckajte paradajz, krastavac, crni luk i masline.",
            "Dodajte feta sir i maslinovo ulje, pa dobro promešajte.",
            "Posolite po ukusu i poslužite.",
        ],
    },
    {
        id: v4(),
        bgImage: CezarSalata,
        name: "Cezar Salata",
        shortText: "Klasika - Cezar salata sa hrskavim piletinom.",
        prepTime: "30 min",
        ingredients: [
            { name: "Piletina", amount: "300g" },
            { name: "Zelena salata", amount: "1 glavica" },
            { name: "Parmezan", amount: "50g" },
            { name: "Hleb", amount: "2 kriške" },
            { name: "Dressing", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Isecite piletinu na kolutove, a hleb na kockice i ispržite na maslinovom ulju.",
            "Iseckajte zelenu salatu i dodajte parmezan.",
            "Poslužite sa hrskavom piletinom i omiljenim dresingom.",
        ],
    },
    {
        id: v4(),
        bgImage: TunaSalata,
        name: "Tuna Salata",
        shortText: "Brza i zdrava tuna salata sa povrćem.",
        prepTime: "15 min",
        ingredients: [
            { name: "Tuna konzerva", amount: "1 komad" },
            { name: "Paradajz", amount: "1 komad" },
            { name: "Krastavac", amount: "1 komad" },
            { name: "Crni luk", amount: "1/2 glavice" },
            { name: "Maslinovo ulje", amount: "2 kašike" },
        ],
        prepInstructions: [
            "Ocedite tunu i iseckajte povrće na kolutove.",
            "Sve sastojke pomešajte, dodajte maslinovo ulje i posolite po ukusu.",
            "Brza i ukusna tuna salata je spremna.",
        ],
    },
    {
        id: v4(),
        bgImage: PastaSalata,
        name: "Pasta Salata",
        shortText: "Salata sa kuvanim testeninama, povrćem i sosom od majoneza.",
        prepTime: "25 min",
        ingredients: [
            { name: "Testenina", amount: "250g" },
            { name: "Paradajz", amount: "2 komada" },
            { name: "Krastavac", amount: "1 komad" },
            { name: "Kukuruz šećerac", amount: "100g" },
            { name: "Majonez", amount: "4 kašike" },
        ],
        prepInstructions: [
            "Skuvajte testeninu prema uputstvu na pakovanju i ohladite je.",
            "Iseckajte povrće i dodajte testeninu, kukuruz i majonez.",
            "Posolite i promešajte sve sastojke.",
        ],
    },
    {
        id: v4(),
        bgImage: KrompirSalata,
        name: "Krompir Salata",
        shortText: "Klasika - krompir salata sa jajima i majonezom.",
        prepTime: "30 min",
        ingredients: [
            { name: "Krompir", amount: "500g" },
            { name: "Jaja", amount: "3 komada" },
            { name: "Kisela pavlaka", amount: "200g" },
            { name: "Kiseli krastavci", amount: "4 komada" },
            { name: "Crni luk", amount: "1 glavica" },
        ],
        prepInstructions: [
            "Skuvajte krompir i jaja, pa ih ohladite i iseckajte na kolutove.",
            "Dodajte kiselu pavlaku, iseckane kisele krastavce i crni luk.",
            "Posolite po ukusu i dobro promešajte.",
        ],
    },
    {
        id: v4(),
        bgImage: SopskaSalata,
        name: "Šopska Salata",
        shortText: "Tradicionalna šopska salata sa svežim povrćem i sirevima.",
        prepTime: "15 min",
        ingredients: [
            { name: "Paradajz", amount: "2 komada" },
            { name: "Krastavac", amount: "1 komad" },
            { name: "Crvena paprika", amount: "1 komad" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Feta sir", amount: "100g" },
        ],
        prepInstructions: [
            "Iseckajte povrće i stavite ga u činiju.",
            "Dodajte izmrvljen feta sir i prelijte maslinovim uljem.",
            "Tradicionalna šopska salata je spremna za serviranje.",
        ],
    },
    {
        id: v4(),
        bgImage: MiksSalata,
        name: "Miks Salata",
        shortText: "Raznovrsna salata sa sezonskim povrćem i susamom.",
        prepTime: "20 min",
        ingredients: [
            { name: "Zelena salata", amount: "1 glavica" },
            { name: "Paradajz", amount: "2 komada" },
            { name: "Krastavac", amount: "1 komad" },
            { name: "Susam", amount: "2 kašike" },
            { name: "Balsamico sirće", amount: "2 kašike" },
        ],
        prepInstructions: [
            "Iseckajte povrće i stavite ga u činiju.",
            "Pospite susamom, prelijte balsamico sirćem i promešajte.",
            "Osvežavajuća miks salata je spremna za uživanje.",
        ],
    },
    {
        id: v4(),
        bgImage: MaslineFetaSalata,
        name: "Masline i Feta Salata",
        shortText: "Jednostavna i ukusna salata sa maslinama i feta sirom.",
        prepTime: "15 min",
        ingredients: [
            { name: "Masline", amount: "100g" },
            { name: "Feta sir", amount: "150g" },
            { name: "Paradajz", amount: "2 komada" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Maslinovo ulje", amount: "2 kašike" },
        ],
        prepInstructions: [
            "Iseckajte paradajz, crni luk, i masline.",
            "Dodajte feta sir i maslinovo ulje, pa dobro promešajte.",
            "Posolite po ukusu i poslužite.",
        ],
    },
];

export { salads };