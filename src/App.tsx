import './App.css'
import {Header} from "./layout/Header.tsx";
import styled from "styled-components";
import {About} from "./layout/About.tsx";
import {TechStack} from "./layout/TechStack.tsx";
import {Projects} from "./layout/Projects/Projects.tsx";
import {Contact} from "./layout/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


function App() {
    return (
        <AddStyles className="App">
            <Wrapper>
                <Header/>
                <About/>
                <TechStack/>
                <Projects/>
                <Contact/>
                <Footer/>
            </Wrapper>
        </AddStyles>
    )
}

export default App

const AddStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #191919;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1440px;
    width: 100%;
    padding: 40px 110px 60px 110px;
`