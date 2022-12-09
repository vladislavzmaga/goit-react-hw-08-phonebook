import { AuthMenuLink, AuthMenuList } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <AuthMenuList>
        <li>
          <AuthMenuLink to={'registration'}>Registration</AuthMenuLink>
        </li>
        <li>
          <AuthMenuLink to={'login'}>Sign in</AuthMenuLink>
        </li>
      </AuthMenuList>
    </div>
  );
};
