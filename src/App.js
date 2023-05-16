import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from './components/ItemCount/ItemCount';
import { CartScreen } from './components/CartScreen/CartScreen';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,

} from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { Checkout } from './components/Checkout/checkout';



function App() {

  return ( 
    <CartProvider>
    

    <div className='App'>
      <Router>
        <NavBar/> 
        <Routes>
          <Route path='/' element ={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element ={<Checkout/>}/>
          <Route path='/cart' element = {<CartScreen/>}/>
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
      </div>

    </CartProvider>


    );

}

export default App;
