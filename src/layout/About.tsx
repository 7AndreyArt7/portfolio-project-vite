import {FlexWrapper} from "../components/FlexWrapper.tsx";
import photo from "../assets/images/ava.webp"
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper justify={"space-between"}>
                <StyledInfo>
                    <span>Hi 👋,</span>
                    <h2>My name is Andrei Artsiusheuski</h2>
                    <h1>I build things for web</h1>
                </StyledInfo>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    object-fit: cover;
`

const StyledAbout = styled.div`
width: 100%;
`
const StyledInfo = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`