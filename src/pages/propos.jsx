import creed from "../assets/montagne2.jpg"
import "../style/propos.css";
import DropDown from "../components/drop-down";
import Footer from "../components/footer";
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