import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../components/slideshow";
import "../style/logement.css"
import Details from "../components/details";
import Footer from "../components/footer";
import Stars from "../components/stars";
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
            <div className="kasaheading">
                         
            <div className="kasaTitre">
                <h2 >{kasa.title}</h2>
                <div className="location"> {kasa.location} </div>
                <div className="tags">{kasa.tags.map((tag,index)=><span key= {index} className="tag"> {tag} </span> )} </div>
            </div> 
            <div>                           
             <div className="host">
                <div className="name"> {kasa.host.name} </div>
                <img src={kasa.host.picture} alt="" />                
            </div>
            <Stars note = {kasa.rating} />
            </div>
            </div> 
            <div className="accord">               
                    <Details titre="Description" contenu = {kasa.description} className="descript"/>                          
                     <Details titre="Equipements" contenu = {
                        <ul>
                            {kasa.equipments.map((equipment,index)=>
                            <li key={index} >{equipment}</li>)}
                        </ul>}/>                         
            </div>  
            <Footer/>         
        </div>       
    );
}
 
export default Logement;