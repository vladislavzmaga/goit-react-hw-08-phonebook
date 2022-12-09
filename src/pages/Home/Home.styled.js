import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 10px;
`;

export const HomeTitle = styled.h2`
  font-size: 32px;
  color: ;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;

  &.active {
    background-color: primary;
    color: dimgrey;
  }
  :hover:not(.active) {
    color: white;
  }
`;
