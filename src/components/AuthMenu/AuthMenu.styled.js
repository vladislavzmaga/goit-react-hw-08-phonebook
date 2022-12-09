import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthMenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 15px;
`;

export const AuthMenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: bold;
  &.active {
    background-color: primary;
    color: dimgrey;
  }
  :hover:not(.active) {
    color: white;
  }
`;
