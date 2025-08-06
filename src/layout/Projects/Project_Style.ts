import styled from "styled-components";

//Project
const ProjectWrapper = styled.div`
    border-radius: 20px;
    width: 345px;
    min-height: 100%;
    background: #363636;
    margin-bottom: 65px;
`

const StylesImg = styled.img`
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    width: 100%;
    height: 260px;
`

const BoxInfo = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
`

const ProjectName = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    text-align: center;
    color: #ccc;
    margin-bottom: 20px;
`
const ProjectDescription = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
    text-align: start;
    margin-bottom: 10px;
`

const TechStackCard = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: #ccc;
`

const Stack = styled.span`
    font-weight: 300;
    font-size: 14px;
`

const BoxLink = styled.div`
    display: flex;
    div + div {
        margin-left: 50px;
    }
    margin-top: 20px;
`
const Link = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    margin-left: 10px;
`

export const S = {
    ProjectWrapper,
    StylesImg,
    BoxInfo,
    ProjectName,
    ProjectDescription,
    TechStackCard,
    Stack,
    BoxLink,
    Link
};