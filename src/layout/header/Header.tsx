import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import styled from "styled-components";
import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo iconId={"logo"} height={"60"} width={"60"} viewBox={"0 0 60 60"}/>
                    <Navigation>
                        <HeaderMenu/>
                        <SocialNetworks/>
                        <MobileMenu/>
                    </Navigation>
                </FlexWrapper>

            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background: rgba(25, 25, 25, 0.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 609px;
    width: 100%;
    gap: 50px;
`
