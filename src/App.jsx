import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer  from './components/Footer';
import Cart from './components/Cart';
import Register from './components/Register';
import CartContextProvider from './components/CartContext';
import NewAccount from './components/NewAccount';
function App() {
  return (
   <>
   <CartContextProvider>
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:idCategory' element={ <ItemListContainer/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/:productId/:itemId' element={ <ItemDetailContainer/>}/>
        <Route path='/newAccount' element={ <NewAccount/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
   </CartContextProvider>
   </>
  );
}

export default App;
