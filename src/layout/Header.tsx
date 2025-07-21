import {Logo} from "../components/logo/Logo.tsx";
import {Menu} from "../components/menu/Menu.tsx";
import styled from "styled-components";
import {SocialNetworks} from "../components/social_networks/SocialNetworks.tsx";
import {Container} from "../components/Container.tsx";
import {FlexWrapper} from "../components/FlexWrapper.tsx";

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
    margin-top: 40px;
    margin-bottom: 50px;
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 609px;
    width: 100%;
    gap: 50px;
`
