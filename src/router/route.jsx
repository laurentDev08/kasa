import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Accueil from "../components/accueil";
import Logement from "../components/logement";
import NotFound from "../components/notFound";
import Propos from "../components/propos";
const Routeur = () => {
    return (
        <Router>      
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