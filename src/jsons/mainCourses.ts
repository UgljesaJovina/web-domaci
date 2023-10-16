import { v4 } from "uuid";
import { ICard } from "../types";
import Cevapi from "../images/main-course/cevapi.png";
import Burek from "../images/main-course/burek.png";
import Gulas from "../images/main-course/gulas.png";
import Karadjordjeva from "../images/main-course/karadjordjeva.png";
import MakaroneSir from "../images/main-course/makarone-sa-sirom.png";
import Moussaka from "../images/main-course/moussaka.png";
import Musaka from "../images/main-course/musaka.png";
import PohovaniKackavalj from "../images/main-course/pohovani-kackavalj.png";
import Sarma from "../images/main-course/sarma.png";

const mainCourses: ICard[] = [
    {
        id: v4(),
        bgImage: Cevapi,
        name: "Ćevapi",
        shortText: "Klasik Balkanske kuhinje - ćevapi sa lukom i ajvarom.",
        prepTime: "30 min",
        ingredients: [
            { name: "Mleveno meso (mešavina govedine i svinjetine)", amount: "500g" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Ajvar", amount: "po ukusu" },
            { name: "Lepinja", amount: "2 komada" },
        ],
        prepInstructions: [
            "Oblikujte male pljeskavice od mlevenog mesa i pecite ih.",
            "Poslužite sa seckanim crnim lukom i ajvarom u lepinji.",
        ],
    },
    {
        id: v4(),
        bgImage: Sarma,
        name: "Sarma",
        shortText: "Tradicionalna sarma punjena mlevenim mesom i kiselim kupusom.",
        prepTime: "2 h",
        ingredients: [
            { name: "Kiseli kupus", amount: "1 glavica" },
            { name: "Mleveno meso (mešavina govedine i svinjetine)", amount: "500g" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Pirinač", amount: "100g" },
            { name: "Slanina", amount: "nekoliko šnita" },
        ],
        prepInstructions: [
            "Pripremite kiseli kupus, odvojite listove i oblikujte sarme sa mesom i pirinčem.",
            "Složite sarme u šerpu, dodajte seckani crni luk i slaninu.",
            "Kuvajte dok sarme ne omekšaju i upiju ukus kiselog kupusa.",
        ],
    },
    {
        id: v4(),
        bgImage: Moussaka,
        name: "Moussaka",
        shortText: "Grčka moussaka sa plazma keksom.",
        prepTime: "1,5 h",
        ingredients: [
            { name: "Mleveno meso (jagnjetina ili junetina)", amount: "500g" },
            { name: "Krompir", amount: "500g" },
            { name: "Paradajz", amount: "2 komada" },
            { name: "Plazma keks", amount: "100g" },
            { name: "Bešamel sos", amount: "200ml" },
        ],
        prepInstructions: [
            "Propržite meso, dodajte seckani paradajz i kuvajte.",
            "Redjajte krompir i meso u vatrostalnu činiju, pospite izdrobljenim plazma keksom i prelijte bešamel sosom.",
            "Pecite dok ne dobije zlatno-smeđu koru.",
        ],
    },
    {
        id: v4(),
        bgImage: Musaka,
        name: "Musaka",
        shortText: "Musaka sa mesom, krompirom i bešamel sosom.",
        prepTime: "1,5 h",
        ingredients: [
            { name: "Mleveno meso (mešavina govedine i svinjetine)", amount: "500g" },
            { name: "Krompir", amount: "800g" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Bešamel sos", amount: "200ml" },
            { name: "Paradajz sos", amount: "200ml" },
        ],
        prepInstructions: [
            "Propržite meso sa seckanim crnim lukom i dodajte paradajz sos.",
            "Složite krompir i meso u vatrostalnu činiju, prelijte bešamel sosom i pecite.",
            "Musaka je gotova kad dobije zlatno-smeđu koru.",
        ],
    },
    {
        id: v4(),
        bgImage: Burek,
        name: "Burek",
        shortText: "Tradicionalni burek sa sirom.",
        prepTime: "1 h",
        ingredients: [
            { name: "Kore za pitu", amount: "500g" },
            { name: "Sir (feta)", amount: "200g" },
            { name: "Jaja", amount: "2 komada" },
            { name: "Kiselo mleko", amount: "200ml" },
            { name: "Maslac", amount: "50g" },
        ],
        prepInstructions: [
            "Pripremite kore za pitu i filujte ih smesom od sira, jaja, i kiselog mleka.",
            "Savijte kore u obliku rolata, premažite maslacem i pecite dok ne dobiju zlatno-smeđu boju.",
        ],
    },
    {
        id: v4(),
        bgImage: Karadjordjeva,
        name: "Karadjordjeva Šnicla",
        shortText: "Šnicla punjena kajmakom i panirana.",
        prepTime: "45 min",
        ingredients: [
            { name: "Teleća šnicla", amount: "1 komad" },
            { name: "Kajmak", amount: "50g" },
            { name: "Jaja", amount: "2 komada" },
            { name: "Brašno", amount: "100g" },
            { name: "Ulje", amount: "za prženje" },
        ],
        prepInstructions: [
            "Napravite rez na šnicli, napunite je kajmakom, uvaljajte u brašno, umočite u jaja, i pecite.",
            "Poslužite uz krompir pire ili salatu.",
        ],
    },
    {
        id: v4(),
        bgImage: PohovaniKackavalj,
        name: "Pohovani Kačkavalj",
        shortText: "Pohovani kačkavalj sa tartar sosom.",
        prepTime: "30 min",
        ingredients: [
            { name: "Kačkavalj", amount: "200g" },
            { name: "Brašno", amount: "100g" },
            { name: "Jaja", amount: "2 komada" },
            { name: "Hlebne mrvice", amount: "100g" },
            { name: "Ulje", amount: "za prženje" },
        ],
        prepInstructions: [
            "Isecite kačkavalj na šnite, uvaljajte ih u brašno, umočite u jaja, i prekrijte hlebnim mrvicama.",
            "Pohujte dok ne dobije zlatno-smeđu boju i poslužite sa tartar sosom.",
        ],
    },
    {
        id: v4(),
        bgImage: Gulas,
        name: "Gulaš",
        shortText: "Goveđi gulaš sa povrćem u bogatom sosu.",
        prepTime: "2 h",
        ingredients: [
            { name: "Goveđi komadići mesa", amount: "500g" },
            { name: "Crni luk", amount: "1 glavica" },
            { name: "Paprika", amount: "2 komada" },
            { name: "Krompir", amount: "2 komada" },
            { name: "Paradajz", amount: "2 komada" },
        ],
        prepInstructions: [
            "Propržite meso, dodajte seckani crni luk, papriku, krompir i paradajz.",
            "Kuvajte dok meso ne omekša i gulaš dobije gustinu.",
        ],
    },
    {
        id: v4(),
        bgImage: MakaroneSir,
        name: "Makarone sa Sirom",
        shortText: "Omiljeni obrok - makarone sa topljenim sirom.",
        prepTime: "20 min",
        ingredients: [
            { name: "Makarone", amount: "250g" },
            { name: "Topljeni sir", amount: "100g" },
            { name: "Mleko", amount: "200ml" },
            { name: "Maslac", amount: "2 kašike" },
            { name: "So", amount: "po ukusu" },
        ],
        prepInstructions: [
            "Skuvajte makarone prema uputstvu na pakovanju, ocedite, i vratite u šerpu.",
            "Dodajte topljeni sir, mleko, maslac, i promešajte dok ne dobijete kremastu teksturu.",
        ],
    },
];

export { mainCourses }