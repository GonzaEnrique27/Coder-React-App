import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import {UiSearchSideBar} from "../components/UiSearch-SideBar/UiSearchSideBar"
import { Routes, Route, Navigate } from 'react-router-dom'
import {ItemDetailContainer} from "../components/ItemDetailContainer/ItemDetailContainer"
import {Footer} from "../components/Footer/Footer"
import {Cart} from "../components/Cart/Cart"
import Navbar from '../components/Navbar/navbar';
import Contacto from "../components/Contacto/Contacto"
import UserInfo from "../components/UserInfo/UserInfo"


export const PublicRoutes = () => {
  return (
    <>
    <div className='ctn-navbar'>
    <Navbar/>
    </div>
    <UserInfo />
    <Routes>  
    <Route path='/' element= {<div className="ctn-home"><UiSearchSideBar/>, <ItemListContainer/></div>}/>
    <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>
    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
    <Route path="/cart" element= {<Cart/>}/>
    <Route path='/contacto' element={ <Contacto /> } />
    <Route path='*' element={ <Navigate to={"/"} /> } />
    </Routes>
    
    
    
    <Footer/>
    </>
  )
}
