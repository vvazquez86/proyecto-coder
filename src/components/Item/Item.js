import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return(
        <div className="mb-3 border border-success">
            <h6 className="mt-2">{name}</h6> 
            <img src={img} alt={name} style={{width: 100}} />
            <p>$ {price}</p>
            <Link className="btn btn-secondary btn-sm mb-2" to={`/item/:${id}`}>Detalle</Link>          
        </div>
    )
}

export default Item