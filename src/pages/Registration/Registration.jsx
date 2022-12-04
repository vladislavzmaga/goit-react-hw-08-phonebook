import { Box } from 'components/Box/Box.styled';

const Registration = () => {
  return (
    <Box>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <hr></hr>
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
        <button type="submit">sign in </button>
      </form>
    </Box>
  );
};
export default Registration;
