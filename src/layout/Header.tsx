import {Logo} from "../components/logo/Logo.tsx";
import {Menu} from "../components/menu/Menu.tsx";
import styled from "styled-components";
import {SocialNetworks} from "../components/social_networks/SocialNetworks.tsx";

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Navigation>
                <Menu/>
                <SocialNetworks/>
            </Navigation>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 220px;
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 609px;
    width: 100%;
    gap: 50px;
`
