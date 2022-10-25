import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "./slideshow";
import "../style/logement.css"
import Details from "./details";
import Footer from "./footer";
const Logement = () => {
    const {id} =useParams();
    const [kasa, setKasa] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/kasa")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            const logementEnCour = data.find((k)=>k.id === id)
            setKasa(logementEnCour);
        })
    })
    if(!kasa)return <div>
        Loading...
    </div>
    return (
        <div>
            <Slideshow cover= {kasa.cover} gallery = {kasa.pictures} />            
            <div className="kasaTitre">
                <h2 >{kasa.title}</h2>
                <div className="location"> {kasa.location} </div>
            </div>            
             <div className="host">
                <div className="name"> {kasa.host.name} </div>
                <img src={kasa.host.picture} alt="" />
            </div>
            <div className="accord">
                <div className="description">
                    <Details titre="Description" contenu = {kasa.description} className="descript"/>
                </div>
                <div className="equipement">
                     <Details titre="Equipement" contenu = {
                        <ul>
                            <li>{kasa.equipments}</li>
                        </ul>}/>
                </div>               
            </div>  
            <Footer/>         
        </div>       
    );
}
 
export default Logement;