import photo from "../assets/images/ava.webp"
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {theme} from "../style/Theme.tsx";
import abstract from "./../assets/icon/abstract.svg"
import {font} from "../style/Common.ts";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <Flex>
                    <StyledInfo>
                        <span>Hi 👋,</span>
                        <h2>My name is</h2>
                        <Name>Andrei Artsiusheuski</Name>
                        <h1>I build things for web</h1>
                    </StyledInfo>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>

                </Flex>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    min-height: 100vh;
    margin-top: 80px;
    align-items: start;
`
const Flex= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const StyledInfo = styled.div`
    text-align: center;
   
    
    letter-spacing: -0.02em;

    ${font({fontWeight: 700, Fmax: 58, Fmin: 32, color: "#d9d9d9", lineHeight: 1})};
    @media ${theme.media.mobile} {
        align-items: center;
    }
}
`

const PhotoWrapper = styled.div`
    margin-top: 20px;
    position: relative;
    background: ${theme.colors.secondary};
    padding: 7px;
    width: 350px;
    height: 350px;
    border-radius: 100%;
    

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
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`