import "../style/slideshow.css"
const Slideshow = ( {cover,gallery} ) => {
    return (
        <div className="slideshow">
            <button className="prev"><i className="fa-solid fa-chevron-left"></i></button>
            <img src={cover} alt="" />
            <button className="next"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}
 
export default Slideshow;