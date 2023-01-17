import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailsConteiner = () => {

    const { productId } = useParams()
    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        getProductById(productId)
        .then(product =>{
            setProducts(product)            
        })
        .catch(error =>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[productId])

    if(loading){
        return  <div className='d-flex justify-content-center'>
                    <div class="spinner-border text-success m-5" role="status">                        
                    </div>                    
                </div>
    }

    if(error){
        return <h1>Hubo un error en la carga!</h1>
    }
   
    return(
        <div className="text-center mt-4">
            <h2 className="h4 pb-2 mb-4 text-secondary border-bottom border-secondary">Detalle del producto</h2>            
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailsConteiner