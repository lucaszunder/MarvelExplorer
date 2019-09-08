import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background-color: #7159C1;
    -webkit-font-smoothing:antialiased;
  }
  body,input,button {
    font: 14px Roboto, sans-serif;
  }

  #root{
    max-width:1020px;
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    padding: 0 20px 50px
  }

  button{
    cursor:pointer;
  }
  ul {
    padding: 2% 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li:hover {
    box-shadow: 1px 1px 15px #f45567;
    transition-duration: 500ms;
  }
`;
