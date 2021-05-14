import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  display: flex;
  overflow: auto;
  position: sticky;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Modal = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:#2a2a2a;
  border-radius: 2%;
  width: 70%;
  height: 90%;

  h2 {
    color: #0ea;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  input {
    width: 80%;

    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-family: 'Girassol';
    font-weight: 400;
    font-size: 1rem;
    color: #000;

    :focus {
      border: 1px solid #0ea;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  select {
    width: 80%;

    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-family: 'Girassol';
    font-weight: 400;
    font-size: 1rem;
    color: #000;

    margin-top: 1rem;
  }

  button[type="submit"] {
    width: 80%;
    padding: 0 1.5rem;
    height: 4rem;
    background:#0ea;
    color: #000;
    border-radius: 0.25rem;
    border: 0;
    font-family: 'Girassol';
    font-size: 1rem,;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    transition: filter 0.cubic-bezier(0.215, 0.610, 0.355, 1);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;



