import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Logement = () => {
    const {id} =useParams();
    const [kasa, setKasa] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/kasa")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            const logementEnCour = data.find((k)=>k.id == id)
            setKasa(logementEnCour);
        })
    })
    if(!kasa)return <div>
            loading...
    </div>
    return (
        <div>
             <h2>{kasa.title}</h2>
             <div className=""> {kasa.location} </div>
             <div>
                <div> {kasa.host.name} </div>
                <img src={kasa.host.picture} alt="" />
             </div>
             <div></div>
        </div>
       
    );
}
 
export default Logement;