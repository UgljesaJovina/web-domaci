import { useParams } from "react-router";
import { mainCourses } from "../jsons/mainCourses";
import { salads } from "../jsons/salads";
import { soups } from "../jsons/soups";
import { useEffect, useState } from "react";
import { ICard } from "../types";
import "../styles/mealStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Meal: React.FC = () => {

    const { id } = useParams();
    const [card, setCard] = useState<ICard>();

    useEffect(() => {
        window.scrollTo(0, 0);
        setCard([...mainCourses, ...salads, ...soups].find(c => c.id === id));
    }, []);

    return (
        <div className="page-container meal-container">
            <h1>{card?.name}</h1>
            <h5><FontAwesomeIcon icon={faClock} style={{ marginRight: "10px" }} />{card?.prepTime}</h5>
            <hr />
            <div className="meal-info-container">
                <div className="meal-info">
                    <h3>Sastojci</h3>
                    <ul>
                        {card?.ingredients?.map(ing => <li>{ing.name}: {ing.amount}</li>)}
                    </ul>
                    <hr />
                    <h3>Priprema</h3>
                    <ul>
                        {card?.prepInstructions?.map(ins => <li>{ins}</li>)}
                    </ul>
                </div>
                <img src={card?.bgImage} />
            </div>
        </div>
    );
}

export { Meal }