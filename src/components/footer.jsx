import pic from "../assets/VectorK.png";
const Footer = () => {
    return (         
        <div className="footer">
            <div className="foot">
                <h2>K</h2>
                <img src={pic} alt="logo maison blanche"/>
                <h2>s</h2>
                <h2>a</h2>                
            </div> 
            <div className="para">
                <p>@ 2020 Kasa.All rights reserved</p>
            </div>                             
        </div>         
    );
}
 
export default Footer;