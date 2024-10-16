import { useContext } from "react";

import Button from "./UI/Button.jsx";
import logoImag from "../assets/logo.jpg";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

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
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

// import { useContext, useMemo } from "react";

// import Button from "./UI/Button.jsx";
// import logoImage from "../assets/logo.jpg";
// import CartContext from "../store/CartContext.jsx";
// import UserProgressContext from "../store/UserProgressContext.jsx";

// export default function Header() {
//   const cartCtx = useContext(CartContext);
//   const userProgressCtx = useContext(UserProgressContext);

//   const totalCartItems = useMemo(() => {
//     return cartCtx.items.reduce((totalNumberOfItems, item) => {
//       return totalNumberOfItems + item.quantity;
//     }, 0);
//   }, [cartCtx.items]);

//   function handleShowCart() {
//     userProgressCtx.showCart();
//   }

//   return (
//     <header id="main-header">
//       <div id="title">
//         <img src={logoImage} alt="A restaurant" />
//         <h1>Food</h1>
//       </div>
//       <nav>
//         <Button textOnly onClick={handleShowCart}>
//           Cart ({totalCartItems})
//         </Button>
//       </nav>
//     </header>
//   );
// }
