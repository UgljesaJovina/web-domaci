import { ICard } from "../types";
import soup from "../images/dish-types/soup.png";
import salad from "../images/dish-types/salad.png";
import mainCourse from "../images/dish-types/main-course.png";
import { v4 } from "uuid";

export const foodTypes: ICard[] = [
    {
        id: v4(),
        name: "Supe",
        shortText: "Skup zdravih supa koje možete pripremiti za celu svoju porodicu da uživaju!",
        bgImage: soup,
        redirect: "/supe"
    },
    {
        id: v4(),
        name: "Salate",
        shortText: "Skup zdravih salata koje možete pripremiti za celu svoju porodicu da uživaju!",
        bgImage: salad,
        redirect: "/salate"
    },
    {
        id: v4(),
        name: "Glavna Jela",
        shortText: "Skup zdravih jela koje mozete pripremiti kao ručak za celu svoju porodicu da uživaju!",
        bgImage: mainCourse,
        redirect: "/glavna-jela"
    }
]