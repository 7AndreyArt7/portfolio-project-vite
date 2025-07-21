import {Description} from "../components/Description.tsx";
import {Title} from "../components/Title.tsx";
import Icon from "../components/icon/Icon.tsx";
import styled from "styled-components";
import {Container} from "../components/Container.tsx";
import {FlexWrapper} from "../components/FlexWrapper.tsx";


export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Title>
                        My Tech Stack
                    </Title>
                    <Description>
                        Technologies I’ve been working with recently
                    </Description>
                    <IconBlock>
                        <Icon iconId={"webstorm"} height={"120px"} width={"120px"} viewBox={"0 0 350 350"}/>
                        <Icon iconId={"github"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"git"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"react"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"type-vscode"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"type-css"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"type-html"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"type-js"} height={"120px"} width={"120px"} viewBox={"0 0 120 120"}/>
                    </IconBlock>
                </FlexWrapper>
            </Container>
        </StyledTechStack>

    );
};

const StyledTechStack = styled.section`
    margin-bottom: 150px;
`

const IconBlock = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    grid-column-gap: 150px;
    grid-row-gap: 50px;

`