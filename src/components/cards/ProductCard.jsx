import React from "react";
import "./cards.css"

const ProductCard = () => {
    return (
        <div>
            <div className="productcard">
                <img src="https://www.kliper.cl/media/weltpixel/owlcarouselslider/images/b/a/banner_poleras_mujer_1.jpg" class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btn">
                      <a href="https://via.placeholder.com/400" className="btn btn-primary">Ver mas</a>  
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
    
export default ProductCard;