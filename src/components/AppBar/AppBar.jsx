import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  AppBarHeader,
  AppBarList,
  AppBarListAuthMenu,
  AppBarNav,
} from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <AppBarHeader>
      <AppBarNav>
        <AppBarList>
          <li>
            <NavLink to={'/'} end>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to={'contacts'}>Contacts</NavLink>
            </li>
          )}
        </AppBarList>
        <AppBarListAuthMenu>
          {!isLoggedIn && (
            <li>
              <AuthMenu />
            </li>
          )}
          {isLoggedIn && (
            <li>
              <UserMenu />
            </li>
          )}
        </AppBarListAuthMenu>
      </AppBarNav>
    </AppBarHeader>
  );
};
