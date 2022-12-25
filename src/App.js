import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <header>
          <Navbar />
          <ItemListContainer greeting='Productos'/>             
      </header>      
    </div>
      
  );
}

export default App;
