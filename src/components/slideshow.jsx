import "../style/slideshow.css"
import { useState } from "react";
const Slideshow = ( {cover,gallery} ) => {
    const [index , setIndex] = useState(-1);
    function next(){
        let i = index;
        i++;
        if(i === gallery.length ){
            i=0;
        }
        setIndex(i)
    }
    function prev(){
        let i = index;
        i--;
        if(i < 0  ){
            i = gallery.length -1;
        }
        setIndex(i)
    }
    return (
        <div className="slideshow">
            {gallery.length > 1 && <button className="prev" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>}
            <img src={index < 0 ? cover:gallery[index]} alt="vue interieur logement" />
            {gallery.length > 1 && <button className="next" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>}
        </div>
    );
}
 
export default Slideshow;