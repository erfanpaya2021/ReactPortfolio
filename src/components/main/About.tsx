import tw from "twin.macro";

import { Container, SectionTitle } from "../common";

import MyPicture from "../../assets/images/me.jpg";

const About = () => {
    return (
        <section id="about" tw="py-24 bg-gray-700 ">
            <Container tw="grid items-center grid-cols-1 md:grid-cols-2">
                <div tw="col-span-1 order-2 md:order-1">
                    <SectionTitle>
                        <span tw="text-red-600">About</span>&nbsp;Me.
                    </SectionTitle>
                    <p tw="text-sm mt-4 text-gray-50 sm:w-[80%] sm:text-base text-justify">
                        Hi, I'm Erfan Paya, a front end developer with 2 years
                        of exprince. I work with
                        <span tw="font-semibold">
                            React, Typescript, Redux and Tailwindcss
                        </span>
                        . I'm currently learning{" "}
                        <span tw="font-semibold">Next js</span>. And I decide to
                        work as a freelancer.
                    </p>
                </div>
                <div tw="col-span-1 flex justify-center items-center mb-16 md:mb-0 order-1 md:order-2">
                    <img
                        tw="w-64 h-64 rounded-full"
                        src={MyPicture}
                        alt="My Picture"
                    />
                </div>
            </Container>
        </section>
    );
};

export default About;
