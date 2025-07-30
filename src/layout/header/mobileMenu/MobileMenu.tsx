import styled, {css} from "styled-components";
import {theme} from "../../../style/Theme.tsx";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <StyledLink><a href={"#"}>Home</a></StyledLink>
                    <StyledLink><a href={"#"}>About</a></StyledLink>
                    <StyledLink><a href={"#"}>Tech Stack</a></StyledLink>
                    <StyledLink><a href={"#"}>Projects</a></StyledLink>
                    <StyledLink><a href={"#"}>Contact</a></StyledLink>
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        margin-left: 50px;
    }

}
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(25, 25, 25, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li + li {
            margin-top: 20px;
            }
        }
    }

    a {
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        color: #a7a7a7;

        &:hover {
            background: ${theme.colors.secondary};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background: ${theme.colors.secondary};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translate(0px);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background: ${theme.colors.secondary};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translate(0px);
                width: 36px;
            `}
        }
    }



`

const StyledLink = styled.li`
    &:hover {
        transform: scale(1.2);

    }
`

