/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import MainNav from '../components/MainNav';

const ProtectedLayout = () => {
  const { isLoading, token, user } = useAuth();
  // const token = sessionStorage.getItem('sb-access-token');
  // const user = sessionStorage.getItem('sb-user-id');

  if (!isLoading && !token && !user) {
    return <Navigate to='/login' replace />;
  }


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

export default ProtectedLayout;
