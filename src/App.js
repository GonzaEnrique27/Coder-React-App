import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  return (

    
    <AuthProvider>
    
      <CartProvider>
      <AppRouter/>
      </CartProvider>
     
     </AuthProvider>


  );
}

export default App;
