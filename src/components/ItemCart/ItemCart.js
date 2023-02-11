import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({ id, name, quantity, price, img }) => {
    let subTotal = price * quantity
    const { removeItem } = useContext(CartContext)
    return (
        <div className="container text-center border border-3 mb-2 mt-2">
            <div className="row align-items-center">
                <div className="col fw-bold">
                    {name}
                </div>
                <div className="col p-2">
                    <img src={img} style={{ width: 50 }} alt='Carrito' />
                </div>
                <div className="col">
                    Precio: ${price}
                </div>
                <div className="col">
                    Cantidad : {quantity}
                </div>
                <div className="col">
                    Subtotal: ${subTotal}
                </div>
                <div className="col">
                <button className="btn btn-outline-danger" onClick={ ()=> removeItem(id) }><img className="" style={{ width: '25px', height: '25px' }} src="/img/trash.png" alt="carrito" /></button>
                </div>
            </div>            
        </div>
    )
}

export default ItemCart