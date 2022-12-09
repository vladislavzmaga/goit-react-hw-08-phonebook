import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarHeader = styled.header`
  width: 100%;
  height: auto;
  background-color: deepskyblue;
`;

export const AppBarNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 25px;
  color: black;
  font-weight: bold;

  &.active {
    background-color: primary;
    color: darkgrey;
  }
  :hover:not(.active) {
    color: white;
  }
`;
