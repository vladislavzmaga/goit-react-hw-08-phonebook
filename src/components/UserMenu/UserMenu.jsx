import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operationSlice';
import { UserMenuWrapper } from './UserMenu.styled';
export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </UserMenuWrapper>
  );
};
