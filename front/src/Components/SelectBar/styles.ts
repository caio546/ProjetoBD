import styled from 'styled-components';

interface IButton {
  clicked: boolean;
}

export const Container = styled.div`
  display: flex;
  margin-top: 2%;
  align-items: flex-start;
  justify-content: center;
  /* height: 100%; */
  width: 100%;
`;

export const Button = styled.div<IButton>`
  margin: 1%;
  padding: 1%;
  font-family: "Girassol";
  border-style: solid;
  border-color: #0ea;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
  }

  background-color: ${props => props.clicked ? "#0ea" : "#000"};
  color: ${props => props.clicked ? "#000" : "#0ea"};
`;


