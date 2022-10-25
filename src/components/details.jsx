import { useState } from "react";
import "../style/details.css"
const Details = ({titre,contenu}) => {
    const [openAcc, setOpenAcc] = useState(false);
    return (
        <div className="content-text">
                <button className="push"  onClick={()=>setOpenAcc(!openAcc)}>
                    <div className="icon">
                        <h4>{titre}</h4>
                        {openAcc?<i className="fa-solid fa-chevron-up"></i>:
                                <i className="fa-solid fa-chevron-down"></i>}
                    </div>                                           
                </button> 
                {openAcc && <div className="contenu"><p> {contenu}</p></div>}                        
        </div>
    );
}
 
export default Details;