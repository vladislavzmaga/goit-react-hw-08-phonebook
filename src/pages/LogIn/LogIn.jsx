import { Box } from 'components/Box/Box.styled';

const LogIn = () => {
  return (
    <Box>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <hr></hr>
        <label>
          Password
          <input type="password" />
        </label>
        <hr></hr>
        <button type="submit">log in </button>
      </form>
    </Box>
  );
};
export default LogIn;
