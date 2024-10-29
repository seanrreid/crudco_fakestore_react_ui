import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

import styles from './Nav.module.css';

const MainNav = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await logout();
    if (!error) {
      return navigate('/login');
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

        <>
          {user && token ? (
            <li>
              <button type='button' onClick={handleLogout}>
                Logout
              </button>
            </li>
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
        </>
      </ul>
    </nav>
  );
};

export default MainNav;
