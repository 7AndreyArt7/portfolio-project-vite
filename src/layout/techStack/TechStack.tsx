import {Description} from "../../components/Description.tsx";
import {Title} from "../../components/Title.tsx";
import Icon from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import React from "react";
import {S} from "./TechStack_Style.ts";

const iconItems = [
    {
        iconId: "webstorm",
        height: "130px",
        width: "130px",
        viewBox: "0 0 320 300"
    },
    {
        iconId: "github",
        height: "120px",
        width: "120px",
        viewBox: "0 0 100 100"
    },
    {
        iconId: "git",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "react",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "type-vscode",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "type-css",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "type-html",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "type-js",
        height: "120px",
        width: "120px",
        viewBox: "0 0 120 120"
    }
]

export const TechStack: React.FC = () => {
    return (
        <S.TechStack>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>

                    <Title>
                        My Tech Stack
                    </Title>

                    <Description>
                        Technologies I’ve been working with recently
                    </Description>

                    <S.IconBlock>
                        {iconItems.map((i, index) => {
                            return <Icon key={index}
                                         iconId={i.iconId}
                                         height={i.height}
                                         width={i.width}
                                         viewBox={i.viewBox}/>
                        })}
                    </S.IconBlock>

                </FlexWrapper>
            </Container>
        </S.TechStack>

    );
};
