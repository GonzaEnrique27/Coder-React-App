import Navbar from './components/Navbar/navbar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {UiSearchSideBar} from "./components/UiSearch-SideBar/UiSearchSideBar"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {
  return (
    <BrowserRouter>
      <div className='ctn-navbar'>
     <Navbar/>
     </div>
     
     <Routes>  
     <Route path='/' element= {<div className="ctn-home"><UiSearchSideBar/> <ItemListContainer/></div>}/>
     <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
     <Route path='*' element={ <Navigate to={"/"} /> } />
     </Routes>
     
     
     
     
     </BrowserRouter>


  );
}

export default App;
