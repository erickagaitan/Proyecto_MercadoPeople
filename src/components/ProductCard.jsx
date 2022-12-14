import React from "react";

const ProductCard = ({img, price, title, width="20rem"}) => {
  return (
    <div className="card mx-2 mb-4 mt-4 hover-overlay ripple shadow-1-strong rounded" style={{ width: width }}>
      <div className="mt-2">
        <img src={img} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">

        <h3 className="card-title fs-5">{title}</h3>

        <div className="d-flex justify-content-between">
          <h6 className="card-text">{price}</h6>
          <i className="fa-regular fa-heart fs-3"></i>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary">Ver más</button>
          <button className="btn bg-green text-white">Añadir</button>
        </div>

      </div>
    </div>
  )
}
    
export default ProductCard;