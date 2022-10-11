import { Link } from "react-router-dom";
import card from "../assets/card.png"
const Card = ({kasa} ) => {
    return (     
        <div className="cont">
            {kasa.map((kasa)=>(               
                <div className="card" key={kasa.id}>
                    <Link to= {`/logement/${kasa.id}`}  >
                        <img src={card} alt="" className="card-content" />
                        <p className="titre">{kasa.title}</p>
                    </Link>
                </div>                 
                )               
            )}            
        </div>
    );
}
 
export default Card;