import creed from "../assets/Assassins-Creed®-Origins__3.jpeg"
import "../style/propos.css";
import DropDown from "./drop-down";
const Propos = () => {
    return (
        <div>
            <section className="header">         
                <img src={creed} alt='paysage' className="pic" />
                   <DropDown/>             
            </section>
        </div>
    );
}
 
export default Propos;