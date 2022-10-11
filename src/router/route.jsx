import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Accueil from "../components/accueil";
// import Footer from "../components/footer";
import Logement from "../components/logement";
import NavBar from "../components/navBar";
import NotFound from "../components/notFound";
import Propos from "../components/propos";
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
            {/* <Footer/> */}
        </Router>                    
    );
}
 
export default Routeur;