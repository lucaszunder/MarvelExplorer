import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f45567;
  display: flex;
  img {
    width: 30%;
    height: 30%;
    padding: 2%;
  }
  div {
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
  }
  button {
    background-color: #7159c1;
    width: 20%;
    border: 0;
    padding: 3%;
    color: white;
    font-weight: 600;
    box-shadow: 4px 4px 10px black;
    font-size: 12pt;
  }
  input {
    width: 40%;
    padding: 2%;
  }
`;
