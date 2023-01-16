import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';


const ItemListContainer = ({greeting}) =>{

    const [products, setproducts] = useState([])
    const {categoryId} = useParams()

useEffect(() => {
    
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
        .then(products =>
            {
                setproducts(products)                
            })
        .catch(error =>{
            console.log(error)
        })
}, [categoryId])
    return(
        <div className="mt-2 text-center">
            <h1 className='mb-5'>{greeting}</h1> 
            <div className='d-flex flex-column'>
            <ItemList products = {products} />
            </div>                       
        </div>
        
    )
}

export default ItemListContainer