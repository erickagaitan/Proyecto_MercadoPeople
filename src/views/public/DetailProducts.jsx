import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../../context/context"

import Features from "../../components/Features"

const DetailProduct = () => {
    const { id } = useParams()
    const { categories, addToCart } = useContext(Context)

    const [detail, setDetail] = useState({features: []})

    useEffect(()=> {
        const detail = categories.filter((item)=> parseInt(item.id) === parseInt(id))
        setDetail(detail[0])
    }, [])

    return (
        <main className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card my-5" style={{ maxWidth: "1000px" }}>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <img src={detail.img} className="img-fluid rounded-start" alt={detail.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title mb-3"><strong>{detail.title}</strong></h3>
                                <hr />
                                <div className="desc">
                                    <h5>Descripción</h5>
                                    <p className="card-desc">{detail.description}</p>
                                </div>

                                <Features features={detail.features}></Features>

                            </div>

                            <div className="d-flex justify-content-between flex-end mt-3 mx-3">
                                <h4 className="card-text">{detail.price}</h4>
                                <button className="btn bg-green text-white mb-2" onClick={() => addToCart(detail)}>Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DetailProduct