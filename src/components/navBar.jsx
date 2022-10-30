import { Link } from "react-router-dom";
import pic from "../assets/Vector.png";

const NavBar = () => {
    return (
        <nav className="content">
            <div className="logo">
                <h2>K</h2>
                <img src={pic} alt=""/>
                <h2>s</h2>
                <h2>a</h2>
            </div>
            <div className="link">
                <Link to="/" className="lien" >Accueil</Link>
                <Link to="/propos" className="lien">A Propos</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;