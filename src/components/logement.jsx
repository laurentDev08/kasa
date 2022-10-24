import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "./slideshow";
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
            loading...
    </div>
    return (
        <div>
            <Slideshow cover= {kasa.cover} gallery = {kasa.pictures} />
             <h2>{kasa.title}</h2>
             <div> {kasa.location} </div>
             <div>
                <div> {kasa.host.name} </div>
                <img src={kasa.host.picture} alt="" />
             </div>
             <div></div>
        </div>
       
    );
}
 
export default Logement;