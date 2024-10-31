import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

import styles from "./Nav.module.css";
import CartNotifier from "./CartNotifier";

const MainNav = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await logout();
    if (!error) {
      return navigate("/login");
    }
  };

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
        {token && user ? (
          <>
            <li>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>

            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/cart'>
            <CartNotifier />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
