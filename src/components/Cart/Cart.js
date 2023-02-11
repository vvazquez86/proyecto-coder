import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"
import { useTitle } from '../../hooks/useTitle';

const Cart = () => {
    const { cart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)
    
    useTitle('Carrito', [])
    if (cart.length === 0) {
        return (
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <h3 className="fw-bold">No hay productos en el carrito</h3>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-outline-dark" to={'/'}>Volver al home</Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 className="m-4 text-center fw-semibold text-success">Productos en carrito</h3>
                <CartList cart={cart} />
                <div className="d-flex justify-content-end mx-5 mt-3">
                    <button onClick={clearCart} className="btn btn-dark">Vaciar Carrito</button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-success" to='/checkout'>Finalizar Compra</Link>
                </div>
            </div>
        )
    }

}
export default Cart