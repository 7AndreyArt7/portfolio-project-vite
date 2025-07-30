import {FlexWrapper} from "../components/FlexWrapper.tsx";
import photo from "../assets/images/ava.webp"
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {theme} from "../style/Theme.tsx";
import abstract from "./../assets/icon/abstract.svg"

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={"space-between"} align="center">
                    <StyledInfo>
                        <span>Hi 👋,</span>
                        <h2>My name is</h2>
                        <Name>Andrei Artsiusheuski</Name>
                        <h1>I build things for web</h1>
                    </StyledInfo>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>


                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    min-height: 100vh;
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    span, h2, h1 {
        font-weight: 700;
        font-size: 58px;
        line-height: 1.2069;
        letter-spacing: -0.02em;
        color: #d9d9d9;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    background: ${theme.colors.secondary};
    padding: 7px;
    width: 350px;
    height: 350px;
    border-radius: 100%;

    //img {
    //    width: 100%;
    //    height: 100%;
    //    object-fit: cover;
    //    border-radius: 100%;
    //}

    &::before {
        content: "";
        width: 628px;
        height: 628px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("${abstract}");
    }

`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`

const Name = styled.h2`
    background: ${theme.colors.secondary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`