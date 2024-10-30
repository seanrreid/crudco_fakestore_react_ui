import { useEffect, useState } from "react";
import { useCart } from "../CartContext";
import ShoppingBag from "./ShoppingCart";

import styles from "./Nav.module.css";

const CartNotifier = () => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems } = useCart();

  useEffect(() => {
    const getQuantity = () => {
      return cartItems.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0);
    };
    setQuantity(getQuantity);
  }, [cartItems]);

  return (
    <div className={styles.cartItems}>
      <ShoppingBag />
      <span className={styles.itemCount}>{quantity}</span>
    </div>
  );
};

export default CartNotifier;
