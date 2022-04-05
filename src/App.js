import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
   <>
   <NavBar/>
   <ItemListContainer greeting="Pagina en construccion"/>
   </>
  );
}

export default App;
