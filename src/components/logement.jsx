import { useParams } from "react-router-dom";

const Logement = () => {
    const {id} =useParams();
    
    return (
        <div>
             <h2>logement page - {id}</h2>
        </div>
       
    );
}
 
export default Logement;