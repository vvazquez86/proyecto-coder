import { useParams } from "react-router-dom";
import { getProductsById } from "../../service/firestore/products";
import { useAsync } from '../../hooks/useAsync';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useTitle } from '../../hooks/useTitle';


const ItemDetailsConteiner = () => {

    const { productId } = useParams()
    const getProduct = () => getProductsById(productId)
    const { data: product, loading, error} = useAsync(getProduct, [productId])
    
    useTitle('Detalle del producto',[])

    if (error) {
        return <h1>Hubo un error en la carga!</h1>
    }
    
    if (loading) {
        return <div className='d-flex justify-content-center'>
            <div className="spinner-border text-success m-5" role="status">
            </div>
        </div>
    }

    return (
        <div className="text-center mt-4">
            <h2 className="h4 pb-2 mb-4 text-secondary border-bottom border-secondary">Detalle del producto</h2>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailsConteiner