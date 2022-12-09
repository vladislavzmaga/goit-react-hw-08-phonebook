import { Box } from 'components/Box/Box.styled';
import { useSelector } from 'react-redux';

import { HomeLink, HomeTitle, HomeWrapper } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Box>
      {!isLoggedIn && (
        <HomeWrapper>
          <HomeTitle>
            Please <HomeLink to={'/registration'}>register </HomeLink>
            to use our application. Or{' '}
            <HomeLink to={'/login'}>sign in</HomeLink> if you are already
            registered.
          </HomeTitle>
        </HomeWrapper>
      )}
      {isLoggedIn && (
        <HomeWrapper>
          <HomeTitle>
            You are already logged in, please go to the
            <HomeLink to={'/contacts'}> contact</HomeLink> page!
          </HomeTitle>
        </HomeWrapper>
      )}
    </Box>
  );
};

export default Home;
