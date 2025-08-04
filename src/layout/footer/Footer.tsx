import styled from "styled-components";
import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";
import {Container} from "../../components/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {theme} from "../../style/Theme.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Flex>
                    <Logo iconId={"logo-footer"} height={"60"} width={"60"} viewBox={"0 0 60 60"}/>
                    <Flex>
                        <Link>+375 29 123 45 67</Link>
                        <Link>info@example.com</Link>
                        <SocialNetworks/>
                    </Flex>
                </Flex>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    a + a {
        margin-left: 30px;
        @media ${theme.media.tablet} {
            margin-left: 0;
        }
    }

    a + div {
        margin-left: 50px;
        @media ${theme.media.tablet} {
            margin-left: 0;
        }
    }

    margin: 100px 0 50px;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
      
    }
`


const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
`


