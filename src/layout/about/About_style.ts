import styled from "styled-components";
import {theme} from "../../style/Theme.tsx";
import {font} from "../../style/Common.ts";
import abstract from "../../assets/icon/abstract.svg"


const About = styled.section`
    display: flex;
    margin-top: 250px;
    
    @media ${theme.media.tablet} {
        margin-top: 170px;
        justify-content: center;
    }

`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.tablet} {
        flex-direction: column;
        justify-content: center;
    }
`

const Info = styled.div`
    text-align: start;
    h1,h2,span {
        letter-spacing: -0.02em;

        ${font({fontWeight: 700, Fmax: 54, Fmin: 32, color: "#d9d9d9", lineHeight: 1})};
    }
    @media ${theme.media.tablet} {
        text-align: center;
    }
`

const PhotoWrapper = styled.div`
    margin-top: 100px;
    position: relative;
    background: ${theme.colors.secondary};
    padding: 7px;
    width: 350px;
    height: 350px;
    border-radius: 100%;
    
    &::before {
        content: "";
        width: 628px;
        height:628px;
        //display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("${abstract}");
        z-index: 0;
        background-size: cover;

        display: none;
    }
    `

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    z-index: 1;
`

const Name = styled.h2`
    background: ${theme.colors.secondary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


export const S = {
    About,
    Flex,
    Info,
    PhotoWrapper,
    Photo,
    Name
}