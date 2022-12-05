import { NavLink } from 'react-router-dom';
import { AuthMenuList } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <AuthMenuList>
        <li>
          <NavLink to={'registration'}>Registration</NavLink>
        </li>
        <li>
          <NavLink to={'login'}>LogIn</NavLink>
        </li>
      </AuthMenuList>
    </div>
  );
};
