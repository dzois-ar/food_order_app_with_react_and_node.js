import { useContext } from "react";

import Button from "./UI/Button.jsx";
import logoImag from "../assets/logo.jpg";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header({ categories = [], activeCategory, onSelectCategory }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImag} alt=" A retaurant" />
      </div>
      <nav>
        <select
          id="category-filter"
          value={activeCategory}
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="" disabled hidden>Menu</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <Button textOnly onClick={handleShowCart}><FontAwesomeIcon icon={faBasketShopping} /> ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
