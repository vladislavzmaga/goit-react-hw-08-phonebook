import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const UserText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: green;
`;

export const LogOutButton = styled.button`
  margin: auto 0;
  background-color: orange;
  border: none;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: red;
  }
`;
