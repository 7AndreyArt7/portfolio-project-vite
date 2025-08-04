import styled from "styled-components";
import {theme} from "../../style/Theme.tsx";


const TechStack = styled.section`
    margin-top: 254px;

    @media ${theme.media.tablet} {
        margin-top: 160px;
    }
`

const IconBlock = styled.div`
    max-width: 1100px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    justify-items: center;

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const S = {
    TechStack,
    IconBlock
}