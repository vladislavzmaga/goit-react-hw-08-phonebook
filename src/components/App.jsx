import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
export const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="contacts"
            element={isLoggedIn ? <Contacts /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="registration"
            element={
              isLoggedIn ? <Navigate to="/contacts" /> : <Registration />
            }
          ></Route>
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <LogIn />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
