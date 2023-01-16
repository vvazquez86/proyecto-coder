import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailsConteiner = () => {

    const { productId } = useParams()
    const [product, setProducts] = useState({})
    useEffect(()=>{
        getProductById(productId)
        .then(product =>{
            setProducts(product)
            console.log(product)
        })
        .catch(error =>{
            console.log(error)
        })
    },[productId])
    console.log(product)
    return(
        <div>
            <h2>Detalle del producto</h2>            
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailsConteiner