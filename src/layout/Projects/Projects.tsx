import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Title} from "../../components/Title.tsx";
import {Description} from "../../components/Description.tsx";
import {Project} from "./project/Project.tsx";
import project1 from "../../assets/images/project-1.jpg"

export const Projects = () => {
    return (
        <FlexWrapper direction={"column"} align={"center"}>
            <Title>Projects</Title>
            <Description>Things I’ve built so far</Description>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
                <Project
                    image={project1}
                    projectName={"Project Tile goes here"}
                    projectDescription={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    techStackCard={"HTML, JavaScript, SASS, React"}
                />
            </FlexWrapper>
        </FlexWrapper>
    );
};


