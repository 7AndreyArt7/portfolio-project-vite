import styled, {css} from "styled-components";
import {theme} from "../../style/Theme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


// header
const Header = styled.header`
    background: rgba(25, 25, 25, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    & > ${FlexWrapper} {
        
    }
`
const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 609px;
    width: 100%;
    gap: 50px;
    
    & > ${FlexWrapper} {

    }
`


// Desktop Menu

const DesktopMenu = styled.nav`
    max-width: 790px;
    width: 100%;

    ul {
        display: flex;
        justify-content: space-between;
    }

    a {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        color: #a7a7a7;
        font-family: "DM Sans", sans-serif;

        &:hover {
            background: ${theme.colors.secondary};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

// Mobile Menu

const MobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        margin-left: 50px;
    }

}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -130px;
    width: 200px;
    height: 200px;
    z-index: 999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background: ${theme.colors.secondary};
        position: absolute;
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
}
`

// Menu

const Link = styled.li`
    &:hover {
        transform: scale(1.2);
    }
`




export const S = {
    Header,
    Navigation,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    Link
}