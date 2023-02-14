import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        background-color: #151618;
        font-family: 'Maven Pro', sans-serif;
        @media (max-width: 1500px) {
            font-size:55%;
        }
        @media (max-width: 1100px) {
            font-size:50%;
        }

    }
    .button
    {
        background-color: #ff4450;
        padding: 1.4rem 3rem;
        color: #fff;
        display: block;
        text-decoration: none;
    }
    h2
    {
        font-size:6.4rem;
        font-weight: 700;
        text-transform: capitalize;
    }
`;
export default GlobalStyle;
