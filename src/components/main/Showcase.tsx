import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { TextWriter } from "../common";

const Showcase = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center h-screen bg-slate-800 text-white"
        >
            {/* Main */}
            <div>
                <h1 className="max-w-lg text-xl sm:text-3xl text-center font-semibold">
                    Hi, I'm &nbsp;
                    <TextWriter
                        text={["Erfan Paya.", "a front end developer."]}
                        speed={200}
                        delay={3000}
                        loop={true}
                    />
                </h1>
                <div className="flex justify-center mt-6 gap-4">
                    <button className="py-2 px-6 rounded-3xl sm:text-xl font-semibold border-[3px] border-red-600 transition-colors duration-500 hover:bg-red-600 hover:text-black ">
                        <a href="#about">About</a>
                    </button>
                    <button className="py-2 px-6 rounded-3xl sm:text-xl font-semibold border-[3px] border-red-600 transition-colors duration-500 hover:bg-red-600 hover:text-black ">
                        <a href="#projects">Projects</a>
                    </button>
                </div>
            </div>

            <div className="absolute top-[70%] left-0">
                <div className=" w-36 sm:w-44 font-semibold text-sm sm:text-base bg-red-600 transition-transform duration-700 -translate-x-[60%] hover:translate-x-0">
                    <a
                        className="w-full flex items-center justify-between p-4 sm:p-5"
                        target="_blank"
                        href="mailto:erfanpaya2021@gmail.com"
                    >
                        Email
                        <FaEnvelope size={28} />
                    </a>
                </div>
                <div className=" w-36 sm:w-44 font-semibold text-sm sm:text-base bg-blue-500 transition-transform duration-700 -translate-x-[60%] hover:translate-x-0">
                    <a
                        className="w-full flex items-center justify-between p-4 sm:p-5"
                        target="_blank"
                        href="https://www.linkedin.com/in/erfan-paya/"
                    >
                        Linkedin
                        <FaLinkedin size={28} />
                    </a>
                </div>
                <div className="w-36 sm:w-44 font-semibold text-sm sm:text-base bg-gray-700 transition-transform duration-700 -translate-x-[60%] hover:translate-x-0">
                    <a
                        className="w-full flex items-center justify-between p-4 sm:p-5"
                        target="_blank"
                        href="https://github.com/erfanpaya2021/"
                    >
                        Github
                        <FaGithub size={28} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
