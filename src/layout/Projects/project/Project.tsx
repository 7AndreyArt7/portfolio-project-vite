import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import Icon from "../../../components/icon/Icon.tsx";
import { S } from "../Project_Style.ts";
import React from "react";


type ProjectPropsType = {
    image?: string
    projectName?: string
    projectDescription?: string
    techStackCard?: string
}

export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.ProjectWrapper>
            <FlexWrapper direction="column">
                <S.StylesImg src={props.image}/>
                <S.BoxInfo>
                    <S.ProjectName>{props.projectName}</S.ProjectName>
                    <S.ProjectDescription>{props.projectDescription}</S.ProjectDescription>
                    <S.TechStackCard>Tech stack : <S.Stack>{props.techStackCard}</S.Stack> </S.TechStackCard>
                    <S.BoxLink>
                        <FlexWrapper>
                            <Icon iconId={"link-chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                            <S.Link href={"#"}>Live Preview</S.Link>
                        </FlexWrapper>
                        <FlexWrapper>
                            <Icon iconId={"github"} width={"20"} height={"20"} viewBox={"0 0 90 90"}/>
                            <S.Link href={"#"}>View Code</S.Link>
                        </FlexWrapper>
                    </S.BoxLink>
                </S.BoxInfo>
            </FlexWrapper>
        </S.ProjectWrapper>

    );
};
