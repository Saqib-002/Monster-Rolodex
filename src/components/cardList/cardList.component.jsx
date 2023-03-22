import { Component } from "react";
import "./cardList.style.css";
import Card from "../card/Card.component";

class CardList extends Component {
    render() {
        const {monsters}=this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => <Card monster={monster} key={monster.id}/>
                )}
            </div>
            );
    }
}

export default CardList;