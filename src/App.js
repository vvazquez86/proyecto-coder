import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailsConteiner from './components/ItemDetailsContainer/ItemDetailsConteiner';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />          
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>}/>
          <Route path='/item/:productId' element={<ItemDetailsConteiner/>}/>
        </Routes>                               
      </BrowserRouter>      
    </div>
      
  );
}

export default App;
