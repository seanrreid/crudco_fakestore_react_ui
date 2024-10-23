/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Products.module.css";

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
};

const Products = () => {
  const products = useLoaderData();

  const jewelery = products.filter(
    (product) => product.category === "jewelery"
  );

  const electronics = products.filter(
    (product) => product.category === "electronics"
  );

  const mensClothing = products.filter(
    (product) => product.category === "men's clothing"
  );

  const womensClothing = products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <>
      <h2>Products</h2>
      <h3>Women's Clothing</h3>
      <ul className={styles.productList}>
        {womensClothing.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
      <h3>Men's Clothing</h3>
      <ul className={styles.productList}>
        {mensClothing.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
      <h3>Jewelery</h3>
      <ul className={styles.productList}>
        {jewelery.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
      <h3>Electronics</h3>
      <ul className={styles.productList}>
        {electronics.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
