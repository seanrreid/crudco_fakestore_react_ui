/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AddToCartBtn from "../components/AddToCartBtn";
import styles from "./Products.module.css";

const ProductList = ({ products, cart = false }) => (
  <ul className={styles.productList}>
    {products.map((product) => (
      <li key={product.id} className={styles.productCard}>
        <Link to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
        </Link>
        {!cart && <AddToCartBtn product={product} />}
        {cart && <p>Quantity: {product.quantity}</p>}
      </li>
    ))}
  </ul>
);

export default ProductList;
