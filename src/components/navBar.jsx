import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="content">
            <h1 className="logo">Kasa</h1>
            <div className="link">
                <Link to="/" className="lien">Accueil</Link>
                <Link to="/propos" className="lien">A Propos</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;