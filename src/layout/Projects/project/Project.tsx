import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import Icon from "../../../components/icon/Icon.tsx";


type ProjectPropsType = {
    image?: string
    projectName?: string
    projectDescription?: string
    techStackCard?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <ProjectWrapper>
            <FlexWrapper direction="column">
                <StylesImg src={props.image}/>
                <BoxInfo>
                    <ProjectName>{props.projectName}</ProjectName>
                    <ProjectDescription>{props.projectDescription}</ProjectDescription>
                    <TechStackCard>Tech stack : <Stack>{props.techStackCard}</Stack> </TechStackCard>
                    <BoxLink>
                        <FlexWrapper>
                            <Icon iconId={"link-chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                            <Link href={"#"}>Live Preview</Link>
                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId={"github"} width={"20"} height={"20"}/>
                            <Link href={"#"}>View Code</Link>
                        </FlexWrapper>
                    </BoxLink>
                </BoxInfo>
            </FlexWrapper>
        </ProjectWrapper>

    );
};

const ProjectWrapper = styled.div`
    border-radius: 20px;
    width: 345px;
    min-height: 100%;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #363636;
    font-family: "Poppins", sans-serif;
    margin-bottom: 65px;
`

const StylesImg = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 260px;
`

const BoxInfo = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
`

const ProjectName = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    text-align: center;
    color: #ccc;
    margin-bottom: 20px;
`
const ProjectDescription = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
    text-align: start;
    margin-bottom: 10px;
`

const TechStackCard = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: #ccc;
`

const Stack = styled.span`
    font-weight: 300;
    font-size: 14px;
`

const BoxLink = styled.div`
    display: flex;
    div + div {
        margin-left: 50px;
    }
    margin-top: 20px;
`
const Link = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    margin-left: 10px;
`