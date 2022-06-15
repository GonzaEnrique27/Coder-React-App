import logo from './logo.svg';
import { BiSearchAlt } from 'react-icons/bi'
import {CartWidget} from '../CartWidget/CartWidget'
import './header.css'
import {Link} from "react-router-dom"

function Navbar() {
    return (     
        <header className="App-header">
        <div className='logo-e'>
            <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
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