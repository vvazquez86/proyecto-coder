const ItemCart = ({ id, name, quantity, price, img }) => {
    return (

        <div className="d-flex justify-content-center">
            <div className="card m-3 d-flex flex-row" style={{ width: 400 }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Cantidad:{quantity}</p>
                    <p className="card-text">Precio:{price}</p>
                    <p className="card-text">Precio total:{price * quantity}</p>
                </div>
                <div>
                    <img className="p-3 mx-1" src={img} alt={name} style={{ width: 60 }} />
                </div>
            </div>
        </div>

    )
}

export default ItemCart