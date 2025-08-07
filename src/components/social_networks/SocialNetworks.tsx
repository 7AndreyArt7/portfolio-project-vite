import styled from "styled-components";
import Icon from "../icon/Icon.tsx";


export const SocialNetworks = () => {
    return (
        <StyleSocialNetworks>
            <ul>
                <li>
                    <a><Icon iconId={"github-logo"} height={"30"} width={"30"} viewBox={"0 0 31 31"}/></a>
                </li>
                <li>
                    <a><Icon iconId={"twitter"} height={"30"} width={"30"} viewBox={"0 0 31 31"}/></a>
                </li>
                <li>
                    <a><Icon iconId={"in"} height={"30"} width={"30"} viewBox={"0 0 31 31"}/></a>
                </li>
            </ul>
        </StyleSocialNetworks>
    );
};

const StyleSocialNetworks = styled.div`
    ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }
`




