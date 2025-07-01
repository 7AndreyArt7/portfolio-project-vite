import styled from "styled-components";

export const Menu = () => {
    return (
        <StyleMenu>
            <ul>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Tech Stack</a></li>
                <li><a href={"#"}>Projects</a></li>
                <li><a href={"#"}>Contact</a></li>
            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    max-width: 790px;
    width: 100%;
  
    ul {
        max-width: 609px;
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        text-align: center;
        color: #a7a7a7;
        font-family: "DM Sans", sans-serif;
    }
`

