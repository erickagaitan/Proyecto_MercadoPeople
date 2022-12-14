import { useContext } from "react";
import React, { useState } from 'react'
import Context from "../../../context/context";

const Favorites = () => {
    const { favorites, handleFavorites, handleFavoritesAll } = useContext(Context)
    const [selectedItem, setSelectedItem] = useState([])

    const onChangeSwitch = (item) => {
        const itemIndex = selectedItem.findIndex(element => element === item.id)

        const updateList = [...selectedItem]
        if (itemIndex === -1) {
            updateList.push(item)
        } else {
            updateList.splice(itemIndex, 1);
        }
        setSelectedItem(updateList)
    }
    const deletedItems = (selectedItem) => {
        handleFavoritesAll(selectedItem)
        setSelectedItem([])
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="card p-4">
                <div className="">
                    <button className="btn text-primary p-0 m-0 border-0" onClick={() => deletedItems(selectedItem)}>Eliminar Favoritos Seleccionados</button>
                </div>
                <hr />
                <h4>Favoritos</h4>
                {
                    favorites.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="d-flex align-items-center mb-3 p-0 mt-2" >
                                    <div className="form-check mx-3">
                                        <input className="form-check-input" type="checkbox" id={item.id} onClick={() => onChangeSwitch(item)} />
                                    </div>
                                    <div>
                                        <div className="col-md-12">
                                            <img src={item.img} alt={item.name} className="img-fluid rounded-start" />
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body px-4 p-0">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text m-0"><strong>$ {item.price}  </strong></p>
                                            <p className="card-text m-0"><small className="text-success">en 6x $ {(item.price / 6).toFixed(3)} sin interés</small></p>
                                            <p className="card-text m-0"><small className="text-success">Envio Gratis</small></p>
                                            <p className="card-text m-0"><button className="btn text-primary p-0 m-0 border-0" onClick={() => handleFavorites(item)}>Eliminar</button></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }

            </div >
        </div >
    )
}

export default Favorites