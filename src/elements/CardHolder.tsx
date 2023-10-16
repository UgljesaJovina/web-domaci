import { ICard } from "../types";
import { Card } from "./Card";
import "../styles/cardStyle.css"

const CardHolder: React.FC<{ cards: ICard[], additionalClasses?: string }> = ({ cards, additionalClasses }) => {
    return (
        <div className={`card-holder ${additionalClasses}`}>
            { cards.map(card => <Card key={card.id} card={card} />) }
        </div>
    )
}

export { CardHolder }