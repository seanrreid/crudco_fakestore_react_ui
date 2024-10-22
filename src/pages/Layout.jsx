/* eslint-disable react/no-unescaped-entities */
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const Layout = () => {
  return (
    <>
      <h1>Ceci n'est pas une ecommerce store</h1>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
