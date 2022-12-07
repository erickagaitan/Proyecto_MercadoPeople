import React from "react"
import "./banner.css"

const Banner = () => {

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="imagenbanner" src="https://wp.es.aleteia.org/wp-content/uploads/sites/7/2017/11/web3-woman-outside-sunny-day-smile-happy-shutterstock_462425596-sunkids-ai.jpg" alt="imagenmujer"/>
                </div>
                <div className="carousel-item">
                    <img className="imagenbanner" src="https://okdiario.com/coolthelifestyle/img/2022/09/12/287842288_173279741808500_2181875745728850554_n-1.jpg" alt="imagen caballero"/>
                </div>
                <div className="carousel-item">
                    <img className="imagenbanner" src="https://www.hemofertas.shop/pic/customize-adv-5.jpg"  alt="imagen nino"/>
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