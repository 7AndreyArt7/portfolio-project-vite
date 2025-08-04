import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from "./Header_style.ts"

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>

                    <Logo iconId={"logo"} height={"60"} width={"60"} viewBox={"0 0 60 60"}/>

                    <S.Navigation>
                        <DesktopMenu menuItems={menuItems}/>
                        <SocialNetworks/>
                        <MobileMenu menuItems={menuItems} />
                    </S.Navigation>

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

