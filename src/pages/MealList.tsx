import { CardHolder } from "../elements";
import { ICard } from "../types";
import "../styles/mealListStyle.css";
import { useEffect } from "react";

const MealList: React.FC<{cards: ICard[]}> = ({ cards }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container meal-list-container">
            <CardHolder cards={cards} />
        </div>
    );
}

export { MealList }