import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICard } from "../types";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";

const Card: React.FC<{ card: ICard }> = ({ card }) => {

    const navigate = useNavigate();

    const handleClick = (e: any) => {
        if (card.redirect)
            navigate(card.redirect);
        else 
            navigate(`/jela/${card.id}`)
    }

    return (
        <div className="card" style={{ backgroundImage: `url(${card.bgImage})` }} onClick={handleClick} >
            <h1 className="card-name">{card.name}</h1>
            <div className="shadow"></div>
            <div className="card-content">
                <h1>{card.name}</h1>
                <p className="card-short-text">{card.shortText}</p>
                {card.prepTime ? <p className="average-prep-time"><FontAwesomeIcon icon={faClock} style={{marginRight: "10px"}} />{card.prepTime}</p> : ""}
            </div>
        </div>
    )
}

export { Card }