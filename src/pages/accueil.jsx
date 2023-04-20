import { useState, useEffect } from "react";
import "../style/accueil.css";
import montagne from "../assets/montagne1.jpg"
import Card from "../components/card";
import Footer from "../components/footer";
const Accueil = () => {
    const [kasa, setKasa] = useState(null);
    useEffect(()=>{
        fetch("https://kasa-35nx.onrender.com/kasa")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setKasa(data);
        })
    })

    return ( 
        <div className="accueil">
            <section className="header">         
                <img src={montagne} alt='montagne' className="pic" />
                <p className="sous-titre">Chez vous, <br /> partout et ailleurs</p>
            </section>
            { kasa && <Card kasas={kasa} />}
             <Footer/>
        </div>        
    );
}
 
export default Accueil;