import Cart from './componets/Cart.jsx';  
import Checkout from './componets/Checkout.jsx';
import Header from './componets/Header.jsx'
import Meals from './componets/Meals.jsx'
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
