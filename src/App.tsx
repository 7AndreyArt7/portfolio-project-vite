import './App.css'
import {Header} from "./layout/Header.tsx";
import styled from "styled-components";
import {About} from "./layout/About.tsx";


function App() {
    return (
        <AddStyles className="App">
            <Wrapper>
                <Header/>
                <About/>
            </Wrapper>
        </AddStyles>
    )
}

export default App

const AddStyles = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
   
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    max-width: 1200px;
    width: 100%;
margin: 40px;
`