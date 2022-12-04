import { NavLink } from 'react-router-dom';
import { AppBarHeader, AppBarList } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarHeader>
      <nav>
        <AppBarList>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'contacts'}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={'registration'}>Registration</NavLink>
          </li>
          <li>
            <NavLink to={'login'}>LogIn</NavLink>
          </li>
        </AppBarList>
      </nav>
    </AppBarHeader>
  );
};
