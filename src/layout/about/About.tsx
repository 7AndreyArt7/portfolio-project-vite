import photo from "../../assets/images/ava.webp"
import {Container} from "../../components/Container.tsx";
import {S} from "./About_style.ts";
import React from "react";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <S.Flex>
                    <S.Info>
                        <span>Hi 👋,</span>
                        <h2>My name is</h2>
                        <S.Name>Andrei Artsiusheuski</S.Name>
                        <h1>
                            <p>A Frontend Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,

                                }}
                            /></h1>
                    </S.Info>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </S.Flex>
            </Container>
        </S.About>
    );
};

