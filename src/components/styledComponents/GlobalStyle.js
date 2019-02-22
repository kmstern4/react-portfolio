import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto');
        font-family: 'Roboto', sans-serif;
        background-image: linear-gradient(to bottom right, #77c9d4, #57bc90);
        background-repeat: no-repeat;
        height: 100vh;
        background-attachment: fixed;
        color: #343434;
        margin: 0;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }

    a:hover {
        color: #ffffff;
    }
`;

export default GlobalStyle;


// FCFC62 BRIGHT YELLOW
// 385F71 MUTED BLUE
// 5DB7DE SKY BLUE
// 9AD2CB MUTED LIGHT BLUE
// 3DD6D0 BRIGHT BLUE
// 71F79F BRIGHT LIGHT LIME
// DB9D47 GOLD
