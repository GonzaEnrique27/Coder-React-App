import Navbar from './components/navbar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div>
     <Navbar/>
     <ItemListContainer titulo="TITULO APLICACION" content="ESTE ES EL CONTENIDO"/>
     </div>
  );
}

export default App;
