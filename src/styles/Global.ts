import { createGlobalStyle } from "styled-components";
import DisneyBold from "../fonts/DisneyBold.ttf";
import DisneyRegular from "../fonts/DisneyRegular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "DisneyBold";
        src: local('DisneyBold'), local('DisneyBold');
        font-style: normal;
        src: url(${DisneyBold}) format('truetype');
    }

    @font-face {
        font-family: "DisneyRegular";
        src: local('DisneyRegular'), local('DisneyRegular');
        font-style: normal;
        src: url(${DisneyRegular}) format('truetype');
    }

    //link
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        font-family: DisneyBold, sans-serif, Arial;
    }
`;

export default GlobalStyle;
