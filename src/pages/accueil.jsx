import { useState, useEffect } from "react";
import "../style/accueil.css";
import dbz from "../assets/montagne1.jpg"
import Card from "../components/card";
import Footer from "../components/footer";
const Accueil = () => {
    const [kasa, setKasa] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/kasa")
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
                <img src={dbz} alt='paysage' className="pic" />
                <p className="sous-titre">Chez vous, <br /> partout et ailleurs</p>
            </section>
            { kasa && <Card kasas={kasa} />}
             <Footer/>
        </div>        
    );
}
 
export default Accueil;