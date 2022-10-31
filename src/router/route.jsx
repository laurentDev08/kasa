import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Accueil from "../pages/accueil";
import Logement from "../pages/logement";
import NavBar from "../components/navBar";
import NotFound from "../pages/notFound";
import Propos from "../pages/propos";
const Routeur = () => {
    return (
        <Router>   
            <NavBar/>   
            <Switch>
                <Route  exact path="/">
                    <Accueil/>
                </Route>
                <Route path="/propos">
                    <Propos/>
                </Route>
                <Route path="/logement/:id">
                    <Logement/>
                </Route>
                 <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>           
        </Router>                    
    );
}
 
export default Routeur;