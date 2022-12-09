import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  padding: 15px;
  position: relative;
  width: 400px;
  height: auto;
  background-color: darkgrey;
  border-radius: 4px;
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  background-color: orangered;
  border: none;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: lightcoral;
  }
`;
