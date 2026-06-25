import { useState } from 'react';
import Cart from './componets/Cart.jsx';
import Checkout from './componets/Checkout.jsx';
import Header from './componets/Header.jsx'
import Meals from './componets/Meals.jsx'
import Footer from './componets/Footer.jsx'
import Error from './componets/Error.jsx';
import useHttp from './hooks/useHttp.js';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

const requstConfing = {};

function App() {
  const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requstConfing, []);
  const [activeCategory, setActiveCategory] = useState('');

  const categories = ['all', ...new Set(loadedMeals.map((meal) => meal.category))];

  const filteredMeals = activeCategory === '' || activeCategory === 'all'
    ? loadedMeals
    : loadedMeals.filter((meal) => meal.category === activeCategory);

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        {isLoading && <p className="center">Fetching meals...</p>}
        {error && <Error title='Failed to fetch meals' message={error} />}
        {!isLoading && !error && <Meals meals={filteredMeals} />}
        <Cart />
        <Checkout />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
