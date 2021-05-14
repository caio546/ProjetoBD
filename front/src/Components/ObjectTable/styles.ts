import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  position: sticky;
  height: 100%;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead th { 
      position: sticky;
      top: 0; 
      z-index: 1; 
      background-color: #000;
    }

    th {
      color: #0ea;
      font-family: 'Girassol';
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      &:hover {
        opacity: 0.9;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #2a2a2a;
      color: #fff;
      font-family: "Girassol";
      font-size: 20px;

      img {
        width: 100px;
        height: 100px;
      }

      &::first-child {
        font: bold;
      }
    }
  }
`;
