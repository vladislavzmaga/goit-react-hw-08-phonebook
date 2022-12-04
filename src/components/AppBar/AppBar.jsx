import { NavLink } from 'react-router-dom';
import {
  AppBarHeader,
  AppBarList,
  AppBarListAuthMenu,
  AppBarNav,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarHeader>
      <AppBarNav>
        <AppBarList>
          <li>
            <NavLink to={'/'} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'contacts'}>Contacts</NavLink>
          </li>
        </AppBarList>
        <AppBarListAuthMenu>
          <li>
            <NavLink to={'registration'}>Registration</NavLink>
          </li>
          <li>
            <NavLink to={'login'}>LogIn</NavLink>
          </li>
        </AppBarListAuthMenu>
      </AppBarNav>
    </AppBarHeader>
  );
};
