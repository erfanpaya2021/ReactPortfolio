import tw, { styled } from "twin.macro";

import { SKILLS_DATA } from "../../data";
import { Container, SectionTitle } from "../common";

const Skills = () => {
    return (
        <section id="skills" tw="py-24 bg-slate-800">
            <Container>
                <SectionTitle>
                    My&nbsp;<span tw="text-red-600">Skills.</span>
                </SectionTitle>
                <div tw="flex flex-wrap justify-center gap-10 mt-8 sm:mt-12">
                    {SKILLS_DATA.map(skilCate => (
                        <TWSkillCategory key={skilCate.title}>
                            <skilCate.icon tw="text-6xl sm:text-7xl text-red-600 mx-auto" />
                            <h3>{skilCate.title}</h3>
                            {skilCate.skills.map(skill => (
                                <TWSkill key={skill.title}>
                                    <span>{skill.title}</span>
                                    <img src={skill.image} alt={skill.title} />
                                </TWSkill>
                            ))}
                        </TWSkillCategory>
                    ))}
                </div>
            </Container>
        </section>
    );
};

const TWSkillCategory = styled.div`
    ${tw`
        w-[70%] min-h-[22rem] py-8
        bg-gray-700 border-b-8 border-gray-700 transition-all duration-500 
        sm:w-[45%]
        lg:w-[30%] lg:py-12
        hover:border-red-600
    `}

    & > h3 {
        ${tw`
            my-4 text-lg text-center font-semibold text-white
            sm:text-xl
        `}
    }
`;

const TWSkill = styled.div`
    ${tw`
        flex justify-center items-center gap-2
        
    `}

    & > span {
        ${tw`text-sm text-gray-100 sm:text-base`}
    }

    & > img {
        ${tw`w-4 sm:w-6`}
    }
`;

export default Skills;
