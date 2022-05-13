
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "../components/ItemListContainer";
import NavBar from '../components/Navbar';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import CartContextProvider from '../components/CartContext';
import Payment from '../components/Payment';
function Home() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/:idCategory' element={<ItemListContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/:productId/:itemId' element={<ItemDetailContainer />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default Home;