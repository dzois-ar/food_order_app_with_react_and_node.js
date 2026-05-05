import { useContext } from "react";

import Button from "./UI/Button.jsx";
import logoImag from "../assets/logo.jpg";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
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
        {/* <h1>food order</h1> */}
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}><FontAwesomeIcon icon={faBasketShopping} /> ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
