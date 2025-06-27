import './App.css'
import {Header} from "./layout/Header.tsx";
import styled from "styled-components";


function App() {
    return (
        <AddStyles className="App">
            <Wrapper>
                <Header/>
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