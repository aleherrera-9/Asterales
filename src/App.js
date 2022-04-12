import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
   <>
   <NavBar/>
   <hr/>
   <ItemDetailContainer/>
   {/* <ItemListContainer greeting="Pagina en construccion"/> */}
   </>
  );
}

export default App;
