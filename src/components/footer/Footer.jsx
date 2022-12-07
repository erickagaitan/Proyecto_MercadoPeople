import "./footer.css"


const Footer = () => {
    return (
        <footer className="text-center">
            <br />
            <hr />
            <div className="d-flex justify-content-center">
            <div className="col-lg-3 text-start">
                <h5>Contacto</h5>
                <p className="m-0">+56955555884</p>
                <p>mercadopeople@mercado.cl</p>
            </div>
            <div className="col-lg-3 text-start">
                <h5>Compra Protegida</h5>
                <p className="m-0 w-75">Completa tus compras en
                    Mercado People para que estén
                    siempre protegidas.
                    Si el producto viene mal o nno
                    llega a su destino, le
                    devolvemos su dinero.
                </p>
            </div>
            <div className="col-lg-3 text-start">
                <h5>Envio gratis desde
                    $19.990</h5>
                <p className="m-0 w-75">Con solo estar registrado en
                    Mercado People, tienes envío
                    gratis en miles de productos
                    seleccionados.
                </p>
            </div>

            </div>
        </footer>
    )
}

export default Footer