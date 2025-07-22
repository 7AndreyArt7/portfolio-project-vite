import styled from "styled-components";
import {theme} from "../../../style/Theme.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <StyledLink><a href={"#"}>Home</a></StyledLink>
                <StyledLink><a href={"#"}>About</a></StyledLink>
                <StyledLink><a href={"#"}>Tech Stack</a></StyledLink>
                <StyledLink><a href={"#"}>Projects</a></StyledLink>
                <StyledLink><a href={"#"}>Contact</a></StyledLink>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    max-width: 790px;
    width: 100%;
  
    ul {
        display: flex;
        justify-content: space-between;
    }
    a{
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        color: #a7a7a7;
        font-family: "DM Sans", sans-serif;
        &:hover {
            background: ${theme.colors.secondary};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
    }
`

const StyledLink = styled.li`
    &:hover {
        transform: scale(1.2);
        
    }
`

