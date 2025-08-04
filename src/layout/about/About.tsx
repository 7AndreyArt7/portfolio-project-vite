import photo from "../../assets/images/ava.webp"
import {Container} from "../../components/Container.tsx";
import { S } from "./About_style.ts";


export const About = () => {
    return (
        <S.About>
            <Container>
                <S.Flex >
                    <S.Info>
                        <span>Hi 👋,</span>
                        <h2>My name is</h2>
                        <S.Name>Andrei Artsiusheuski</S.Name>
                        <h1>I build things for web</h1>
                    </S.Info>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>

                </S.Flex>
            </Container>
        </S.About>
    );
};

