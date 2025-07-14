import { Description } from "../components/Description.tsx";
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
    margin-bottom: 200px;
`

const IconBlock = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
`