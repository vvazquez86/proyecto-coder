const ItemDetail = ({id, name, img})=>{
    return(
        <div className="d-flex align-items-center border p-2">
            <h4 className="m-2">{name}</h4>
            <p className="m-2">Identificador: {id}</p>            
            <img src={img} alt={name} style={{width: 200}} />                             
        </div>
    )
}

export default ItemDetail