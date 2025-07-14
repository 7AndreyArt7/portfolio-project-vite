import styled from "styled-components";
import {Button} from "../../components/Button.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Title>For any questions please mail me:</Title>
            <Link href={"#"}> hi@pavanmg.in</Link>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field as={"textarea"} placeholder={"message"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};


const StyledContact = styled.section`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    
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
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
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
   `
const Field = styled.input`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.05em;
    background: #252527;;
    border: 1px solid #4a4a4a;
    
`