
import {Button} from "../../components/Button.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import { S } from "./Contact_Style.ts";
import React from "react";



export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <FlexWrapper direction={"column"}
                             align={"center"}>
                    <S.Title>For any questions please mail me:</S.Title>
                    <S.Link href={"#"}> hi@pavanmg.in</S.Link>
                    <S.Form>
                        <S.Field placeholder={"name"}/>
                        <S.Field placeholder={"subject"}/>
                        <S.Field as={"textarea"} placeholder={"message"}/>
                        <Button type={"submit"}>Send message</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};

