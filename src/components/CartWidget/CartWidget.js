import { Link } from "react-router-dom"


const CartWidget = ({ totalQuantity }) => {

    return (
        <div className="mx-2 text-danger fw-bold">
            <Link to='/cart'>
                <img className="p-1" style={{ width: '35px', height: '35px' }} src="/img/icono.png" alt="carrito" />
            </Link>
            {totalQuantity}
        </div>
    )
}
export default CartWidget