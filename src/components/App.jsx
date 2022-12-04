import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Route>
      </Routes>
    </>
  );
};
