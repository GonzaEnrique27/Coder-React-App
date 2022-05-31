import Navbar from './components/Navbar/navbar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {UiSearchSideBar} from "./components/UiSearch-SideBar/UiSearchSideBar"

function App() {
  return (
    <div>
      <div className='ctn-navbar'>
     <Navbar/>
     </div>
     <div className='ctn-home'>
     <UiSearchSideBar/>
     <ItemListContainer/>
     </div>
     </div>
  );
}

export default App;
