import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "./menu/Menu.tsx";
import styled from "styled-components";
import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Navigation>
                        <Menu/>
                        <SocialNetworks/>
                    </Navigation>
                </FlexWrapper>

            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background: rgba(25, 25, 25, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 609px;
    width: 100%;
    gap: 50px;
`
