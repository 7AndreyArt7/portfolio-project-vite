import styled from "styled-components";
import Icon from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SocialNetworks} from "../../components/social_networks/SocialNetworks.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId={"logo-007"}/>
            <FlexWrapper>
                <Link>+375 29 123 45 67</Link>
                <Link>info@example.com</Link>
                <SocialNetworks/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
display: flex;
    justify-content: space-between;
    a+a{
        margin-left: 30px;
    }
    a+div{
        margin-left: 50px;
    }
    margin-top: 200px;
`
const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
`


