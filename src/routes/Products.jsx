/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
};

const Products = () => {
  const products = useLoaderData();

  return (
    <>
      <h2>Products</h2>
      <ProductList products={products} />
    </>
  );
};

export default Products;
