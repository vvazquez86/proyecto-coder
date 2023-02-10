import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId))
        :collection(db, 'products')
        
        getDocs(collectionRef).then(response => {
            
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()        
                return { id: doc.id, ...data}
            })
            setproducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return  <div className='d-flex justify-content-center'>
                    <div className="spinner-border text-success m-5" role="status">                        
                    </div>                    
                </div>
    }

    if(error){
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