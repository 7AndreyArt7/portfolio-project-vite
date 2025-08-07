import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {About} from "./layout/about/About.tsx";
import {TechStack} from "./layout/techStack/TechStack.tsx";
import {Projects} from "./layout/Projects/Projects.tsx";
import {Contact} from "./layout/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./components/particle/Particle.tsx";


function App() {
    return (
        <div className="App">
            <Particle/>
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

