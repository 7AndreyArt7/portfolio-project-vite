import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";
import {Container} from "../../components/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import { S } from "./Footer_Style.ts";


export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Flex>
                    <Logo iconId={"logo-footer"} height={"60"} width={"60"} viewBox={"0 0 60 60"}/>
                    <S.Flex>
                        <S.Link>+375 29 123 45 67</S.Link>
                        <S.Link>info@example.com</S.Link>
                        <SocialNetworks/>
                    </S.Flex>
                </S.Flex>
            </Container>
        </S.Footer>
    );
};


