const CartList = ({ cart, addToCart, removeFromCart, cartTotal }) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="card p-4">
                <div className="form-check p-0">
                    <h5>Carrito()</h5>
                </div>
                {
                    cart.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="d-lg-flex align-items-center mb-3 p-0" >
                                    <div className="d-flex justify-content-center">
                                        <div className="col-lg-6">
                                            <img src={item.img} alt={item.name} className="img-fluid rounded-start" width={'400px'} />
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row-sm d-lg-flex align-items-center">
                                            <div className="card-body p-0 col-lg-5">
                                                <h5 className="card-title text-lg-start">{item.title}</h5>
                                                <div className="d-flex justify-content-center justify-content-lg-start mt-4 mt-lg-0">
                                                    <p className="m-0 mx-2 mx-lg-0 text-primary">Eliminar</p>
                                                    <p className="m-0 mx-2 text-primary">Comprar ahora</p>
                                                </div>
                                            </div>
                                            <div className="card-body mt-4 mt-lg-0 p-0 d-flex justify-content-lg-end justify-content-center align-items-center">
                                                <button className="btn btn-danger mx-2" onClick={() => removeFromCart(item)}>-</button>
                                                <p className="mx-2 m-0">{item.count}</p>
                                                <button className="btn btn-success mx-2" onClick={() => addToCart(item)}>+</button>
                                            </div>
                                            <div className="card-body p-0 mt-4 mt-lg-0 col-lg-4">
                                                <h4 className="text-center m-0">${(item.price * item.count).toFixed(3)}</h4>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <hr />
                <div className="d-flex justify-content-end">
                    <div className="col-lg-7 row justify-content-end">
                        <div className="col-lg-7 d-flex justify-content-between">
                            <h5 className="text-primary">Envio a Coyhaique </h5>
                            <span className="text-black">$10.000</span>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-between">
                            <h3>Total con envío  </h3>
                            <h3 className="text-black">${cartTotal().toFixed(3)}</h3>
                        </div>
                    </div>
                </div>
                <hr />
            </div >
        </div>
    )
}

export default CartList