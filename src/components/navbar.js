import logo from '../logo.svg';
import { BiSearchAlt } from 'react-icons/bi'
import {CartWidget} from './CartWidget'

function Navbar() {
    return (     
        <header className="App-header">
        <div className='logo-e'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>E-Commerce</p>
          </div>
        <ul>
          <p>|</p>
          
          <li>Enlace 1</li>
          <p>|</p>
          
          <li>Enlace 2</li>
          <p>|</p>
          
          <div>
            <CartWidget/>
          </div>
        </ul>
            
          <div class="search-box">
          <button className="btn-search"><BiSearchAlt/></button>
          <input type="text" className="input-search" placeholder="Buscar..."/>
      </div>
        </header>
    );
  }

  export default Navbar