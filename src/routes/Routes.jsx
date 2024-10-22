import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "../pages/Layout";
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Products from "../pages/Products";

const Routes = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
