import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';

import styles from './Nav.module.css';

const MainNav = () => {
  const { user, session } = useAuth();

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
          <>
            {!!user && !!session ? (
              <NavLink to='/logout'>DON'T CLICK THIS</NavLink>
            ) : (
              <NavLink to='/register'>Register</NavLink>
            )}
          </>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
