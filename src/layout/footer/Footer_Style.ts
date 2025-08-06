import styled from "styled-components";
import {theme} from "../../style/Theme.tsx";

//Footer

const Footer = styled.footer`
    a + a {
        margin-left: 30px;
        @media ${theme.media.tablet} {
            margin-left: 0;
        }
    }

    a + div {
        margin-left: 50px;
        @media ${theme.media.tablet} {
            margin-left: 0;
        }
    }

    margin: 100px 0 50px;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;

    }
`


const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
`

export const S = {
    Footer,
    Flex,
    Link
}