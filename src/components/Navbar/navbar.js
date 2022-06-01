import logo from './logo.svg';
import { BiSearchAlt } from 'react-icons/bi'
import {CartWidget} from '../CartWidget/CartWidget'
import './header.css'

function Navbar() {
    return (     
        <header className="App-header">
        <div className='logo-e'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>EGuitar</p>
          </div>
   
        <div className='iconos-header'>
            <CartWidget/>
          <div className="search-box">
          <button className="btn-search"><BiSearchAlt/></button>
          <input type="text" className="input-search" placeholder="Buscar..."/>
      </div>
      </div>
        </header>
    );
  }

  export default Navbar