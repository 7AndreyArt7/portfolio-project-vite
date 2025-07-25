import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";
// import fon from "../assets/images/fon.webp"


export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${theme.colors.primary};
        margin: 0;
    //     padding: 0;
    //     background-image: url();
    //     background-size: cover; 
    //     background-position: center; 
    //     background-repeat: no-repeat; 
    //     background-attachment: fixed; 
    //     min-height: 100vh;
    // }

    button {
        border: none;
        background-color: unset;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


`