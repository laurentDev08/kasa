import creed from "../assets/Assassins-Creed®-Origins__3.jpeg"
import "../style/propos.css";
import DropDown from "./drop-down";
import Footer from "./footer";
const Propos = () => {
    return (
        <div>
            <section className="header">         
                <img src={creed} alt='paysage' className="pic" />
                   <DropDown/>             
            </section>
            <Footer/>
        </div>
    );
}
 
export default Propos;