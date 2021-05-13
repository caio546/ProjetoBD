import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Defining Global Variables
  :root {
    --background: #020202;
  }
  // Defining global style
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  // Changing root font-size based on user screen
  html {
    // Using % because user font config can be diferent
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-widht: 720px) {
      font-size: 87.5%; //14px
    }
    height: 100%;
  }

  body {
    height: 100%;
    background: var(--background);
    // Aplying smooth font
    -webkit-font-font-smooth: antialised;
  }

  body, input, textarea, button, ul {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Girassol', sans-serif;
    font-weight: 600;
    color: #0ea;
  }

  a {
    text-decoration: none;
    color: #F2F2F2;

    &:hover {
      opacity: 0.8;
      color: #0ea;
    }
  }

  // Button Click
  button {
    cursor: pointer;
  }
  // Configs to Disabled components
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
