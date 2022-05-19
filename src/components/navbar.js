import logo from '../logo.svg';

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
          
          <li>Enlace 3</li>
          <p>|</p>
          
          <li>Enlace 4</li>
          <p>|</p>
        </ul>
        </header>
    );
  }

  export default Navbar