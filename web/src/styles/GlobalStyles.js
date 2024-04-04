import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/Background.svg';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #a9a904;
    --secondary: #02634b;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #040205;
    --black-2: #121826;
    --white-1: #C6BED9;
    --gray: #64718A;
    --grey: var(--gray);
    --white: white;
    --black: black;
    --gradient: linear-gradient(135deg, #000000, #04619F);
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter';
    /* background: var(--gradient); */
    background-image: url(${backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
