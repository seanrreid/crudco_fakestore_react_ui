import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

const MainNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
