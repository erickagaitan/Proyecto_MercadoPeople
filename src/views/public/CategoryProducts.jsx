import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../../context/context"
import Heart from "../private/favorites/Heart";

import Features from "../../components/Features"

const Products = () => {
    const { categories, addToCart, favorites, handleFavorites } = useContext(Context)

    const [productsFilter, setProductsFilter] = useState([])
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const filterCategories = (type) => {
        const products = categories.filter((e) => e.category === type)
        setProductsFilter(products)
    }
    const filteTitle = () => {
        const search = value.toLowerCase()
        const filtered = categories.filter((item) => {
            const title = item.title.toLowerCase()

            return title.includes(search)
        })
        setProductsFilter(filtered)
    }
    const detailProduct = (id) => navigate(`/detail/${id}`)

    useEffect(() => {
        filteTitle()
    }, [value])


    return (
        <><h1 className="d-flex justify-content-center my-3">Categorías</h1>

            <nav className="navbar bg-light">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="input-group flex-nowrap h-100">
                            <input
                                type="text"
                                className="form-control form-control-sm border-end-0"
                                placeholder="Buscar productos" onChange={(e) => setValue(e.target.value)} aria-label="Search"
                            />
                            <span className="input-group-text p-3 border-start-0" id="addon-wrapping"
                            > <i className="fa-solid fa-magnifying-glass"></i></span>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="d-flex justify-content-center my-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={() => filterCategories('woman')} className="nav-link" id="nav-mujer-tab" data-bs-toggle="tab" data-bs-target="#nav-mujer" type="button" role="tab" aria-controls="nav-mujer" aria-selected="true"><i className="fa-solid fa-person-dress"></i> Mujer</button>
                    <button onClick={() => filterCategories('men')} className="nav-link" id="nav-hombre-tab" data-bs-toggle="tab" data-bs-target="#nav-hombre" type="button" role="tab" aria-controls="nav-hombre" aria-selected="false"><i className="fa-solid fa-person"></i> Hombre</button>
                    <button onClick={() => filterCategories('boy_and_girl')} className="nav-link" id="nav-niño-tab" data-bs-toggle="tab" data-bs-target="#nav-niño" type="button" role="tab" aria-controls="nav-niño" aria-selected="false"><i className="fa-solid fa-child"></i> Niño</button>
                    <button onClick={() => filterCategories('footwear')} className="nav-link" id="nav-calzado-tab" data-bs-toggle="tab" data-bs-target="#nav-calzado" type="button" role="tab" aria-controls="nav-calzado" aria-selected="false"><i className="fa-solid fa-shoe-prints"></i> Calzado</button>
                    <button onClick={() => filterCategories('accessories')} className="nav-link" id="nav-accesorios-tab" data-bs-toggle="tab" data-bs-target="#nav-accesorios" type="button" role="tab" aria-controls="nav-accesorios" aria-selected="false"><i className="fa-solid fa-glasses"></i> Accesorios</button>
                </div>
            </nav>

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
                                            <h4 className="card-text m-0 p-0">${item.price}</h4>
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