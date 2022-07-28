import { useMemo, useState } from "react";
import tw, { styled } from "twin.macro";
import { FaEye, FaCode } from "react-icons/fa";

import { Container, SectionTitle } from "../common";
import { PROJECTS_DATA } from "../../data";
import type { ProjectTypes } from "../../data";

const Projects = () => {
    const [projectType, setProjectType] = useState<ProjectTypes>("All");

    const projectTypes: ProjectTypes[] = ["All", "React", "Javascript"];
    const filteredProjects = useMemo(() => {
        if (projectType === "All") {
            return PROJECTS_DATA;
        } else {
            return PROJECTS_DATA.filter(
                project => project.type === projectType,
            );
        }
    }, [projectType]);

    return (
        <section id="projects" tw="py-16 bg-gray-700">
            <Container>
                <SectionTitle>
                    My&nbsp;<span tw="text-red-600">Projects.</span>
                </SectionTitle>
                <TWProjectTypesContainer>
                    {projectTypes.map(value => (
                        <button
                            onClick={() => setProjectType(value)}
                            key={value}
                        >
                            {value}
                        </button>
                    ))}
                </TWProjectTypesContainer>
                <TWProjectsContainer>
                    {filteredProjects.map(project => (
                        <div key={project.id} tw="relative" className="group">
                            <div tw="w-full h-[16rem] sm:h-[22rem]">
                                <img
                                    tw="w-full h-full object-cover"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                            <TWProjectContent>
                                <h3>{project.title}</h3>
                                <TWProjectIcons>
                                    <span>Made with:</span>
                                    {project.techs.map((tech, index) => (
                                        <img
                                            src={tech}
                                            alt={`tech ${index + 1}`}
                                        />
                                    ))}
                                </TWProjectIcons>
                                <TWProjectLinksContainer>
                                    <a href={project.demoUrl}>
                                        <FaEye /> Demo
                                    </a>

                                    <a href={project.codeUrl}>
                                        <FaCode />
                                        Code
                                    </a>
                                </TWProjectLinksContainer>
                            </TWProjectContent>
                        </div>
                    ))}
                </TWProjectsContainer>
            </Container>
        </section>
    );
};

const TWProjectTypesContainer = styled.div`
    ${tw`flex items-center flex-wrap mt-8`}

    & > button {
        ${tw`
            py-2 px-4 border 
            text-sm border-slate-800 text-white 
            sm:text-base sm:px-6
            hover:bg-slate-800
        `}
    }
`;

const TWProjectsContainer = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4`}
`;

const TWProjectContent = styled.div`
    ${tw`
        absolute top-0 left-0 w-full h-full
        flex flex-col justify-center items-center    
        bg-black bg-opacity-80 opacity-0
        transition-all duration-500 
        group-hover:h-full group-hover:opacity-100
        cant-hover:opacity-100
    `}

    & > h3 {
        ${tw`text-lg text-white sm:text-xl`}
    }
`;

const TWProjectIcons = styled.div`
    ${tw`flex my-6`}

    & > span {
        ${tw`text-sm text-gray-100 sm:text-base`}
    }

    & > img {
        ${tw`w-4 sm:w-6 ml-1`}
    }
`;

const TWProjectLinksContainer = styled.div`
    ${tw`flex items-center gap-2 `}

    & > a {
        ${tw`
            flex items-center gap-1
            py-1 px-4 rounded-3xl
            transition-colors duration-500
            border  border-red-600 bg-red-600 text-white
            text-sm
            hover:bg-slate-900 hover:border-red-600 hover:text-red-600
            sm:text-base
         `}
    }
`;

export default Projects;
