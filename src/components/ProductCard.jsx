import React from "react";

const ProductCard = () => {
  return (
    <div className="card mx-4 mb-4 mt-4 hover-overlay ripple shadow-1-strong rounded" style={{ width: '20rem' }}>
      <div className="mt-2">
        <img src="https://images.unsplash.com/photo-1610890833108-ded89b9dcc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" className="card-img-top" alt="..." />
      </div>
      <div className="card-body">

        <h5 className="card-title">Jeans Wrangler Mom</h5>

        <div className="d-flex justify-content-between">
          <h4 className="card-text">$29.990</h4>
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