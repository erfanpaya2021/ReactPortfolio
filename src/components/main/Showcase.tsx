import tw, { styled } from "twin.macro";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { TextWriter } from "../common";

const Showcase = () => {
    return (
        <section
            id="home"
            tw="relative flex items-center justify-center h-screen bg-slate-800 text-white"
        >
            {/* Main */}
            <div>
                <h1 tw="max-w-lg text-xl sm:text-3xl text-center font-semibold">
                    Hi, I'm &nbsp;
                    <TextWriter
                        text={["Erfan Paya.", "a front end developer."]}
                        speed={200}
                        delay={3000}
                        loop={true}
                    />
                </h1>
                <div tw="flex justify-center mt-6 gap-4">
                    <TWButton>
                        <a href="#about">About</a>
                    </TWButton>
                    <TWButton>
                        <a href="#projects">Projects</a>
                    </TWButton>
                </div>
            </div>

            <div tw="absolute bottom-[10%] left-0">
                <TWSocialIcon tw=" bg-red-600 ">
                    <a target="_blank" href="mailto:erfanpaya2021@gmail.com">
                        Email
                        <FaEnvelope size={28} />
                    </a>
                </TWSocialIcon>
                <TWSocialIcon tw="bg-blue-500">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/erfan-paya/"
                    >
                        Linkedin
                        <FaLinkedin size={28} />
                    </a>
                </TWSocialIcon>
                <TWSocialIcon tw="bg-gray-700">
                    <a target="_blank" href="https://github.com/erfanpaya2021/">
                        Github
                        <FaGithub size={28} />
                    </a>
                </TWSocialIcon>
            </div>
        </section>
    );
};

const TWButton = tw.button`
    py-2 px-6 rounded-3xl font-semibold border-[3px] border-red-600 transition-colors duration-500 
    sm:text-xl
    hover:bg-red-600 hover:text-black
`;

const TWSocialIcon = styled.div`
    ${tw`
        w-36 font-semibold text-sm  bg-red-600 transition-transform duration-700 translate-x-[-60%]
        sm:w-44 sm:text-base
        hover:translate-x-0
     `}

    & > a {
        ${tw`w-full flex items-center justify-between p-4 sm:p-5`}
    }
`;

export default Showcase;
