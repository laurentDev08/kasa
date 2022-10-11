import { Link } from "react-router-dom";
import "../style/notFound.css";
const NotFound = () => {
    return (
        <div className="oups">
             <h1 className="not">404</h1>
             <p className="found">Oups! La page que vous demandez n'existe pas</p>
             <Link to="/" className="retour">Retourner sur la page d'accueil</Link>
        </div>
       
    );
}
 
export default NotFound;