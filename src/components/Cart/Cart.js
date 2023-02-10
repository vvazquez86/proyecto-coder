import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = ()=>{
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>Carrito</h1>
            <CartList cart={cart} />
            <Link to='/checkout'>Finalizar Compra</Link>            
        </div>
    )
}
export default Cart