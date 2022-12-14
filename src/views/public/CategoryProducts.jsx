import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../../context/context"
import Heart from "../private/favorites/Heart";

import Features from "../../components/Features"

const Products = () => {
    const { categories, addToCart, favorites, handleFavorites } = useContext(Context)

    const [productsFilter, setProductsFilter] = useState([])
    const navigate = useNavigate()

    const filterCategories = (type) => {
        const products = categories.filter((e) => e.category === type)
        setProductsFilter(products)
    }

    const detailProduct = (id) => navigate(`/detail/${id}`)



    return (
        <><h2 className="d-flex justify-content-center my-3">Categorías</h2>
            <div className="d-grid gap-5 d-md-flex justify-content-md-center mb-4">
                <button onClick={() => filterCategories('woman')} className="btn me-md-2" type="button"><i className="fa-solid fa-person-dress"></i> Mujer</button>
                <button onClick={() => filterCategories('men')} className="btn" type="button"><i className="fa-solid fa-person"></i> Hombre</button>
                <button onClick={() => filterCategories('boy_and_girl')} className="btn me-md-2" type="button"><i className="fa-solid fa-child"></i> Niño</button>
                <button onClick={() => filterCategories('footwear')} className="btn" type="button"><i className="fa-solid fa-shoe-prints"></i> Calzado</button>
                <button onClick={() => filterCategories('accessories')} className="btn me-md-2" type="button"><i className="fa-solid fa-glasses"></i> Accesorios</button>
            </div>
            <div className="container">

                <div className="row d-flex justify-content-center">

                    {
                        productsFilter.map((item) => {
                            return (
                                <div className="card mx-4 mb-4" style={{ width: '20rem' }} key={item.id}>
                                    <div className="mt-2">
                                        <img src={item.img} className="card-img-top" alt={item.title} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="card-text m-0 p-0">{item.price}</h4>
                                            <div onClick={() => handleFavorites(item)}>
                                                <Heart filled={favorites.includes(item) ? true : false}></Heart>
                                            </div>
                                        </div>
                                        <Features features={item.features}></Features>
                                        <div className="d-flex justify-content-between mt-3">
                                            <button className="btn btn-primary" onClick={() => detailProduct(item.id)}>Ver más</button>
                                            <button className="btn bg-green text-white" onClick={() => addToCart(item)}>Añadir</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Products