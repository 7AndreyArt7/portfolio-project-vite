import styled from "styled-components";

type TitlePropsType = {
    marginBottom?:string
}

export const Title = styled.h2<TitlePropsType>`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 48px;
    
    line-height: 54%;
    text-align: center;
    color: #ccc;
    margin-bottom: ${props => props.marginBottom || "50px"};
`