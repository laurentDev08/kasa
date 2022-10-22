import { Link } from "react-router-dom";
import card from "../assets/card.png";
const Card = ({kasas} ) => {
    return (     
        <div className="cont">
            {kasas.map((kasa)=>(               
                <div className="card" key={kasa.id}>
                    <Link to= {`/logement/${kasa.id}`}  className="linked">
                        <img src={kasa.cover} alt="titre location" className="card-content" />
                        <p className="titre">{kasa.title}</p>
                    </Link>
                </div>                 
                )               
            )}            
        </div>
    );
}
 
export default Card;