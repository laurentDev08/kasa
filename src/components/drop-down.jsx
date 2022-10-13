const DropDown = () => {
    return (
        <div>        
            <div className="content-text">
                <button className="btn">
                    <div className="icon">
                        <h4>Fiabilité</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>                                           
                </button> 
                  <div className="text">
                        <p> Les annonces postées sur KASA garantissent une fiabilité totale.
                            Les photos sont confromées aux logements, et toutes les informations
                            sont réguliérements vérifiéees par nos équipes.
                        </p>     
                    </div> 
                        
            </div>
            <div className="content-text">
                <button className="btn">
                    <div className="icon">
                        <h4>Respect</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>                                           
                </button> 
                    <div className="text">
                        <p> La bienveillance fait partie des valeurs fondatrices de Kasa. 
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
                            une exclusion de notre plateforme.
                        </p>     
                    </div>                         
            </div>
           <div className="content-text">
                <button className="btn">
                    <div className="icon">
                        <h4>Service</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>                                           
                </button> 
                    <div className="text">
                        <p> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                            N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>     
                    </div>                         
            </div>
             <div className="content-text">
                <button className="btn">
                    <div className="icon">
                        <h4>Sécurité</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>                                           
                </button> 
                    <div className="text">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                            chaque logement correspond aux critères de sécurité établis par nos services. 
                            En laissant une note aussi bien à l'hôte qu'au locataire, 
                            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>     
                    </div>                         
            </div>
        </div>
    );
}
 
export default DropDown;