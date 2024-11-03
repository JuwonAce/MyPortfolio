import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
