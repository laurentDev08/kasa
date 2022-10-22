import { useState, useEffect } from "react";
import "../style/accueil.css";
import dbz from "../assets/dbfz.jpg"
import Card from "./card";

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
        <div>
            <section className="header">         
                <img src={dbz} alt='paysage' className="pic" />
            </section>
            { kasa && <Card kasas={kasa} />}
        </div>        
    );
}
 
export default Accueil;