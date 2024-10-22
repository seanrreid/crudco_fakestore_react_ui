const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Categories = () => {
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
