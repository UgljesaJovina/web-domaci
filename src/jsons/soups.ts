import { v4 } from "uuid";
import { ICard } from "../types";
import BrokoliSupa from "../images/soups/brokoli-supa.png"
import TelecaSupa from "../images/soups/teleca-supa.png"
import GovedjaSupa from "../images/soups/govedja-supa.png"
import GrasakSupa from "../images/soups/grasak-supa.png"
import KoprivaSupa from "../images/soups/kopriva-supa.png"
import ParadajzSupa from "../images/soups/paradajz-supa.png"
import PilecaSupa from "../images/soups/pileca-supa.png"
import RibljaSupa from "../images/soups/riblja-supa.png"

const soups: ICard[] = [
    {
        id: v4(),
        bgImage: BrokoliSupa,
        name: "Krem Supa od Brokolija",
        shortText: "Kremasta i ukusna supa od brokolija.",
        prepTime: "30 min",
        ingredients: [
            { name: "Brokoli", amount: "500g" },
            { name: "Krompir", amount: "200g" },
            { name: "Luk", amount: "1 glavica" },
            { name: "Beli luk", amount: "2 čena" },
            { name: "Brašno", amount: "2 kašike" },
            { name: "Biljna pavlaka", amount: "200ml" },
        ],
        prepInstructions: [
            "Očistite i iseckajte brokoli, krompir, luk i beli luk.",
            "Propržite luk i beli luk na maslacu, dodajte brašno i promešajte.",
            "Dodajte brokoli i krompir, pa prelijte sa vodom. Kuvajte dok povrće ne omekša.",
            "Sipajte biljnu pavlaku i koristite štapni mikser da napravite kremastu supu.",
        ],
    },
    {
        id: v4(),
        bgImage: TelecaSupa,
        name: "Teleća Supa",
        shortText: "Tradiconalna teleća supa sa povrćem.",
        prepTime: "2 h",
        ingredients: [
            { name: "Teleće meso", amount: "500g" },
            { name: "Šargarepa", amount: "2 komada" },
            { name: "Koren celera", amount: "1 komad" },
            { name: "Luk", amount: "1 glavica" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Stavite teleće meso u veliki lonac sa vodom i kuvajte na niskoj vatri 1 sat.",
            "Dodajte seckano povrće i kuvajte još sat vremena.",
            "Posolite po ukusu i procedite supu.",
        ],
    },
    {
        id: v4(),
        bgImage: ParadajzSupa,
        name: "Paradajz Supa",
        shortText: "Osvežavajuća paradajz supa sa bosiljkom.",
        prepTime: "40 min",
        ingredients: [
            { name: "Paradajz", amount: "1 kg" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Bosiljak", amount: "nekoliko listova" },
            { name: "Maslinovo ulje", amount: "2 kašike" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Stavite paradajz u ključalu vodu na nekoliko sekundi, zatim ga oljuštite i sitno iseckajte.",
            "Propržite crni luk na maslinovom ulju, dodajte paradajz i kuvajte 20 minuta.",
            "Dodajte bosiljak i posolite po ukusu.",
        ],
    },
    {
        id: v4(),
        bgImage: PilecaSupa,
        name: "Pileća Supa sa Nudlama",
        shortText: "Topla i hrskava supa sa piletinom i nudlama.",
        prepTime: "1 h",
        ingredients: [
            { name: "Piletina", amount: "500g" },
            { name: "Nudle", amount: "100g" },
            { name: "Šargarepa", amount: "2 komada" },
            { name: "Peršun", amount: "nekoliko grančica" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Stavite piletinu u lonac sa vodom i kuvajte dok ne bude gotova.",
            "Izvadite piletinu, iseckajte je, i vratite u supu zajedno sa seckanim povrćem i nudlama.",
            "Kuvajte dok nudle ne omekšaju, posolite po ukusu, i pospite sveže seckanim peršunom.",
        ],
    },
    {
        id: v4(),
        bgImage: GovedjaSupa,
        name: "Goveđa Supa sa Krompirom",
        shortText: "Napitak koji greje srce i stomak.",
        prepTime: "1.5 h",
        ingredients: [
            { name: "Goveđi repovi", amount: "500g" },
            { name: "Krompir", amount: "2 komada" },
            { name: "Šargarepa", amount: "2 komada" },
            { name: "Luk", amount: "1 glavica" },
            { name: "Beli luk", amount: "2 čena" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Stavite goveđe repove u lonac sa vodom i kuvajte dok meso ne omekša.",
            "Dodajte seckano povrće i kuvajte još pola sata.",
            "Posolite po ukusu i procedite supu.",
        ],
    },
    {
        id: v4(),
        bgImage: KoprivaSupa,
        name: "Supa od Koprive",
        shortText: "Hranljiva supa sa svežom koprivom.",
        prepTime: "45 min",
        ingredients: [
            { name: "Sveža kopriva", amount: "300g" },
            { name: "Krompir", amount: "2 komada" },
            { name: "Luk", amount: "1 glavica" },
            { name: "Beli luk", amount: "2 čena" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Očistite i operite svežu koprivu, iseckajte je, i stavite je u vodu da provri.",
            "Dodajte seckano povrće i kuvajte dok ne bude mekano.",
            "Posolite po ukusu i procedite supu.",
        ],
    },
    {
        id: v4(),
        bgImage: RibljaSupa,
        name: "Riblja Supa",
        shortText: "Bogat i ukusan napitak sa svežim ribljim filetima.",
        prepTime: "45 min",
        ingredients: [
            { name: "Fileti sveže ribe", amount: "400g" },
            { name: "Krompir", amount: "1 komad" },
            { name: "Šargarepa", amount: "1 komad" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Beli luk", amount: "2 čena" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Stavite riblje filete u vodu i kuvajte dok ne postanu mekani. Zatim ih izdinstajte.",
            "Dodajte seckano povrće i kuvajte dok ne bude mekano.",
            "Posolite po ukusu i procedite supu.",
        ],
    },
    {
        id: v4(),
        bgImage: GrasakSupa,
        name: "Grašak Supa",
        shortText: "Zelena i osvežavajuća supa sa graškom.",
        prepTime: "30 min",
        ingredients: [
            { name: "Grašak", amount: "300g" },
            { name: "Krompir", amount: "1 komad" },
            { name: "Luk", amount: "1 glavica" },
            { name: "Mirođija", amount: "nekoliko grančica" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Propržite luk na maslacu, dodajte krompir i grašak, pa kuvajte 15 minuta.",
            "Dodajte vodu i kuvajte dok povrće ne omekša.",
            "Posolite po ukusu i pospite seckanom mirođijom.",
        ],
    },
];

export { soups }