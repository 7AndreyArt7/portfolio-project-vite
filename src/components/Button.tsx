import styled from "styled-components";
import {theme} from "../style/Theme.tsx";

export const Button = styled.button`
    max-width: 150px;
    width: 100%;
    padding: 16px 0;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #fff;
    background: ${theme.colors.secondary};
    display: inline-block;

    &:hover {
        transform: scale(1.2);
    }
`