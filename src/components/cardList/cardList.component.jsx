import "./cardList.style.css";
import Card from "../card/Card.component";

const CardList =({monsters})=> {
    return (
        <div className="card-list">
            {monsters.map((monster) => <Card monster={monster} key={monster.id}/>
            )}
        </div>
        );
}

export default CardList;