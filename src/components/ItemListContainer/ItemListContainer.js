import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getProducts } from '../../service/firestore/products';
import { useTitle } from '../../hooks/useTitle';

const ItemListContainer = ({ greeting }) => {

        const { categoryId } = useParams()

        const getProductsWithCategory = () => getProducts(categoryId)

        const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

        useTitle('Relax',[])

        if (loading) {
            return <div className='d-flex justify-content-center'>
                <div className="spinner-border text-success m-5" role="status">
                </div>
            </div>
        }

        if (error) {
            return <h1>Hubo un error en la carga</h1>
        }

        return (
            <div className="mt-2 text-center">
                <h1 className='h4 pb-2 mb-4 text-secondary border-bottom border-secondary'>{greeting}</h1>
                <div className='d-flex flex-row justify-content-around'>
                    <ItemList products={products} />
                </div>
            </div>

        )
    }

export default ItemListContainer