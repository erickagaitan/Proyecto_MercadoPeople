import React from "react"
import "./banner.css"

const Banner = () => {

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="imagenbanner" src="https://i.ibb.co/sWHkwzB/new-Drop-Spring.png" alt="imagen caballero"/>
                </div>
                <div className="carousel-item active">
                    <img className="imagenbanner" src="https://i.ibb.co/gVjg5sm/1670838603c6040ce13be3e328a3e8d0134079efc7-thumbnail-1920x.webp" alt="imagenmujer"/>
                </div>
                <div className="carousel-item">
                    <img className="imagenbanner" src="https://i.ibb.co/bPC1Y99/ready-To-Shine.webp"  alt="imagen nino"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner;