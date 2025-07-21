import './App.css'
import {Header} from "./layout/Header.tsx";
import {About} from "./layout/About.tsx";
import {TechStack} from "./layout/TechStack.tsx";
import {Projects} from "./layout/Projects/Projects.tsx";
import {Contact} from "./layout/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


function App() {
    return (
        <div className="App">
                <Header/>
                <About/>
                <TechStack/>
                <Projects/>
                <Contact/>
                <Footer/>
        </div>
    )
}

export default App

