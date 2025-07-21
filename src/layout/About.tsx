import {FlexWrapper} from "../components/FlexWrapper.tsx";
import photo from "../assets/images/ava.webp"
import styled from "styled-components";
import {Container} from "../components/Container.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={"space-between"} align="center" >
                    <StyledInfo>
                        <span>Hi 👋,</span>
                        <h2>My name is</h2>
                        <Name>Andrei Artsiusheuski</Name>
                        <h1>I build things for web</h1>
                    </StyledInfo>
                    <Photo src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    margin-bottom: 150px;
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    span, h2, h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 58px;
        line-height: 1.2069;
        letter-spacing: -0.02em;
        color: #d9d9d9;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    padding: 7px;
    border-radius: 100%;
    display: inline-block;

    img {
        border-radius: 12px;
        display: block;
        
        object-fit: cover;

`
const Name = styled.h2`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`