import styled from "styled-components";
import {Button} from "../../components/Button.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../style/Theme.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper direction={"column"}
                             align={"center"}>
                    <Title>For any questions please mail me:</Title>
                    <Link href={"#"}> hi@pavanmg.in</Link>
                    <StyledForm>
                        <Field placeholder={"name"}/>
                        <Field placeholder={"subject"}/>
                        <Field as={"textarea"} placeholder={"message"}/>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};


const StyledContact = styled.section`
`

const Title = styled.h2`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ccc;
    margin-bottom: 10px;
`

const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    background: ${theme.colors.secondary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 30px;
`

const StyledForm = styled.form`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    textarea {
        resize: none;
        height: 155px;
    }

`
const Field = styled.input`
    width: 100%;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.05em;
    background-color: #252527;;
    border: 1px solid #4a4a4a;
    padding: 7px 15px;
    margin-bottom: 16px;
    color: white;
    

    &::placeholder {
        text-transform: capitalize;
        color: #495057;;
    }
    
    &:focus-visible{
        outline: 1px solid #4a4a4a;
    }
`