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
                        <Icon iconId={"webstorm"} height={"130px"} width={"130px"} viewBox={"0 0 320 300"}/>
                        <Icon iconId={"github"} height={"120px"} width={"120px"} viewBox={"0 0 100 100"}/>
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
    max-width: 1100px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    gap: 25px;
    justify-items: center;

    @media screen {max-width: 575px} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(250px, auto);

}

`