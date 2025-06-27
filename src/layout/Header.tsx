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
`
const Navigation = styled.div`
    display: flex;
    gap: 50px;
`
