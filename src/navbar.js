import logo from './logo.svg';

function Navbar() {
    return (     
        <header className="App-header">
        <div className='logo-e'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>E-Commerce</p>
          </div>
        <ul>
          <li>Enlace 1</li>
          
          <li>Enlace 2</li>
          
          <li>Enlace 3</li>
          
          <li>Enlace 4</li>
        </ul>
        </header>
    );
  }

  export default Navbar