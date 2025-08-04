import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Title} from "../../components/Title.tsx";
import {Description} from "../../components/Description.tsx";
import {Project} from "./project/Project.tsx";
import project1 from "../../assets/images/project-1.webp"
import project2 from "../../assets/images/project-2.webp"
import project3 from "../../assets/images/project-3.webp"
import project4 from "../../assets/images/project-4.webp"
import project5 from "../../assets/images/project-5.webp"
import project6 from "../../assets/images/project-6.webp"
import {Container} from "../../components/Container.tsx";


export const Projects = () => {
    return (
        <Container>
            <FlexWrapper direction={"column"} align={"center"}>
                <Title>Projects</Title>
                <Description>Things I’ve built so far</Description>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Project
                        image={project1}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                    <Project
                        image={project2}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                    <Project
                        image={project3}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                    <Project
                        image={project4}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                    <Project
                        image={project5}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                    <Project
                        image={project6}
                        projectName={"Project Tile goes here"}
                        projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        techStackCard={"HTML, JavaScript, SASS, React"}
                    />
                </FlexWrapper>
            </FlexWrapper>
        </Container>
    );
};


