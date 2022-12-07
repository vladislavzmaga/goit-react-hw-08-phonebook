import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import {
  AppBarHeader,
  AppBarLink,
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
            <AppBarLink to={'/'} end>
              Home
            </AppBarLink>
          </li>
          {isLoggedIn && (
            <li>
              <AppBarLink to={'contacts'}>Contacts</AppBarLink>
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
