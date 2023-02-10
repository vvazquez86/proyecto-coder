import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailsConteiner from '../components/ItemDetailsContainer/ItemDetailsConteiner';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';

const AppRouter = () => {
    return(
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>}/>
          <Route path='/item/:productId' element={<ItemDetailsConteiner />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />} />
        </Routes> 
    )
}

export default AppRouter