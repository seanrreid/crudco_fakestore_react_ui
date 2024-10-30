import { useCart } from "../CartContext";
import ProductList from "../components/ProductList";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ProductList products={cartItems} cart={true} />
      )}
    </>
  );
};

export default Cart;
