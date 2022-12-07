import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarHeader = styled.header`
  width: 100%;
  height: 60px;
`;

export const AppBarNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const AppBarList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 15px;
`;

export const AppBarListAuthMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 15px;
`;

export const AppBarLink = styled(NavLink)`
  text-decoration: none;
`;
