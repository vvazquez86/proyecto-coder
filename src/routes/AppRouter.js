import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailsConteiner from '../components/ItemDetailsContainer/ItemDetailsConteiner';

const AppRouter = () => {
    return(
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>}/>
          <Route path='/item/:productId' element={<ItemDetailsConteiner/>}/>
        </Routes> 
    )
}

export default AppRouter