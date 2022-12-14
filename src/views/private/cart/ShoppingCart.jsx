import { useContext } from "react"
import CartList from "./CarList"
import Context from "../../../context/context"

const ShoppingCart = () => {
    const { cart, addToCart, removeFromCart, cartTotal, formatNumberES, removeProductCart } = useContext(Context)

    return (
        <main className="col-lg-12 mt-5 text-center ">
            <div className="mt-5">
                <h1 className="mt-t p-4">Detalles del Pedido</h1>
                {
                    cart.length !== 0 ?
                        <CartList
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            removeProductCart={removeProductCart}
                            cartTotal={cartTotal}
                            formatNumberES={formatNumberES}
                        >
                        </CartList>
                        : <p>No hay elementos en el carrito</p>
                }
            </div>
        </main>
    )
}

export default ShoppingCart