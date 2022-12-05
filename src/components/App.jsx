import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/operationSlice';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
export const App = () => {
  const { isLoggedIn, isRefreshing } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <h2>Feching user data</h2>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={isLoggedIn ? <Contacts /> : <Navigate to="/" />}
            ></Route>
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
      )}
    </>
  );
};
