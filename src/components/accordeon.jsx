import { useState } from "react";
const Accordeon = ({titre,contenu}) => {
    const [openAcc, setOpenAcc] = useState(false);
    return (
        <div className="content-btn">
                <button className="btn"  onClick={()=>setOpenAcc(!openAcc)}>
                    <div className="icon">
                        <h4>{titre}</h4>
                        {openAcc?<i className="fa-solid fa-chevron-up"></i>:
                                <i className="fa-solid fa-chevron-down"></i>}
                    </div>                                           
                </button> 
                {openAcc && <div className="text"><p> {contenu}</p></div>}                        
        </div>
    );
}
 
export default Accordeon;