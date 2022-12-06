const DetailProduct = () => {
    return (
        <main className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card my-5" style={{ maxWidth: "1000px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1610890833108-ded89b9dcc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title mb-3"><strong>Jeans Wrangler Mom</strong></h3>
                                <hr />
                                <div className="desc">
                                    <h5>Descripción</h5>
                                    <p className="card-desc">Mom jeans, lo último en comodidad y estilo. Estos jeans de tiro alto van con todo. Un diseño relajado y cómodo, pero a la vez atractivo y duradero,
                                        convertirán a esta prenda en un imprescindible para tu clóset.</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between flex-end mt-3 mx-3">
                                <h4 className="card-text">$29.990</h4>
                                <button className="btn bg-green text-white">Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DetailProduct