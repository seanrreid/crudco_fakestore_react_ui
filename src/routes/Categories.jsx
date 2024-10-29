import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/categories`;
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
};

const Categories = () => {
  const categories = useLoaderData();

  return (
    <>
      <h2>Categories</h2>
      {categories.map((category, index) => {
        return (
          <ul key={`${category}-${index}`}>
            <li>{category}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Categories;
