import {Title} from "../components/Title.tsx";
import Icon from "../components/icon/Icon.tsx";
import styled from "styled-components";


export const TechStack = () => {
    return (
        <StyledTechStack>
            <Title>
                My Tech Stack
            </Title>
            <Description>
                Technologies I’ve been working with recently
            </Description>
            <IconBlock>
                <Icon iconId={"webstorm"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"github"}/>
                <Icon iconId={"git"}/>
                <Icon iconId={"react"}/>
                <Icon iconId={"type-vscode"}/>
                <Icon iconId={"type-css"}/>
                <Icon iconId={"type-html"}/>
                <Icon iconId={"type-js"}/>
            </IconBlock>
        </StyledTechStack>

    );
};

const StyledTechStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    max-height: 100vh;
`

const Description = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 0.8125;
    text-align: center;
    color: #a7a7a7;
    margin-bottom: 140px;
`

const IconBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap : 200px;

`

