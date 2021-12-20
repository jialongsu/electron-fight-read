import { createGlobalStyle } from '@/configs/styledComponents';

const GlobalStyle = createGlobalStyle`
  ul {
    padding-inline-start: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    border-color: inherit;
    border-width: 0;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
