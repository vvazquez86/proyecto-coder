import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"

const Cart = ()=>{
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>Carrito</h1>
            <CartList cart={cart} />            
        </div>
    )
}

export default Cart