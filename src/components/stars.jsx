const Stars = ({note}) => {
    let rating = [];
    for (let index = 0; index < note; index++) {
       rating.push(<i key= {index} className="fa-solid fa-star orange"></i>)        
    }
     for (let index = note; index < 5; index++) {
       rating.push(<i key= {index} className="fa-solid fa-star grey"></i>)        
    }
    return (
        <div> {rating} 

        </div>
    );
}
 
export default Stars;