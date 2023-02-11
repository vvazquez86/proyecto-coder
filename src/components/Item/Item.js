import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {   
    return (
        <div className="m-3">
            <div className="mb-3 border-3 card" style={{ width: 200 }}>
                <img className="p-3 mx-1" src={img} alt={name} style={{ width: 180 }} />
                <div className="card-body bg-success-subtle">
                    <h6 className="mt-2">{name}</h6>
                    <p>$ {price}</p>
                    <Link className="btn btn-secondary btn-sm mb-2" to={`/item/${id}`}>Detalle</Link>
                </div>
            </div>
        </div>
    )
}
export default Item