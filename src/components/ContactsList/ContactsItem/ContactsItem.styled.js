import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsName = styled.p`
  font-weight: bold;
`;

export const ContactTel = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  color: green;
`;

export const DeleteBtn = styled.button`
  margin: auto 0;
  background-color: blue;
  border: none;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: blueviolet;
  }
`;

export const EditButton = styled.button`
  margin: auto 0;
  background-color: orangered;
  border: none;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: lightcoral;
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
