import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({ id, name, img, description, stock, price }) => {

    const [quantity, setQuantity] = useState(0)
    console.log(quantity)
    const handleOnAdds = (quantity) => {
        
        addItem({ id, name, price, quantity, img})
        setQuantity(quantity)
    }

    const { addItem, isInCart } = useContext(CartContext)
      

    return (        
        <article>
            <div className="d-flex flex-column align-items-center p-2">
                <h4 className="m-2">{name}</h4>                
                <p>Precio: $ {price}</p>
                <p>Descripcion: {description}</p>
                <img src={img} alt={name} style={{ width: 200 }} />                                
            </div>
            <footer className="d-flex flex-column align-items-center p-2">
                {
                    isInCart(id) ? (
                        <Link to='/cart' className="btn btn-secondary mb-3">Terminar compra</Link>                        
                    ) : (
                        
                        <ItemCount stock={stock} onAdd={handleOnAdds} />                        
                    )                    
                }                
            </footer>
            
        </article>
        
    )
}

export default ItemDetail