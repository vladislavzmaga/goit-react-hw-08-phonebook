import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operationSlice';
import { LogOutButton, UserMenuWrapper, UserText } from './UserMenu.styled';
export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <UserText>Welcome {user.name}</UserText>
      <LogOutButton type="button" onClick={handleLogOut}>
        Log out
      </LogOutButton>
    </UserMenuWrapper>
  );
};
