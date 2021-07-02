import { createGlobalStyle } from "styled-components";
import walls from "../assets/img/wallsonfire.jpg";

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    color: #332c36;
    font-family: 'Roboto', sans-serif;
    background: url(${walls}) center/cover;
  }
`;
