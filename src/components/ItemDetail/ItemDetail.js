import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, description, stock, price})=>{
    return(
        <div className="d-flex flex-column align-items-center p-2">
            <h4 className="m-2">{name}</h4>
            <p className="m-2">Codigo: {id}</p>
            <p>Precio: $ {price}</p>            
            <p>Descripcion: {description}</p>
            <img src={img} alt={name} style={{width: 200}} />      
            <ItemCount stock = {stock}/>                       
        </div>   
    )
}

export default ItemDetail