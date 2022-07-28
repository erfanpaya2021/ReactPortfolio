import { IconType } from "react-icons";
import {
    FaHome,
    FaUser,
    FaCode,
    FaBrain,
    FaEnvelope,
    FaTools,
    FaBookReader,
} from "react-icons/fa";

import { SkillImages } from "../constants/images";

export const navItems = [
    { title: "home", icon: FaHome },
    { title: "about", icon: FaUser },
    { title: "skills", icon: FaBrain },
    { title: "projects", icon: FaCode },
    { title: "contact", icon: FaEnvelope },
];

interface Skill {
    title: string;
    image: string;
}
interface SkillCate {
    title: string;
    icon: IconType;
    skills: Skill[];
}

export const skills: SkillCate[] = [
    {
        title: "Languages",
        icon: FaCode,
        skills: [
            { title: "HTML", image: SkillImages.html },
            { title: "CSS", image: SkillImages.css },
            { title: "Sass", image: SkillImages.sass },
            { title: "Javascript", image: SkillImages.javascript },
            { title: "Typescript", image: SkillImages.typescript },
        ],
    },
    {
        title: "Frameworks",
        icon: FaBookReader,
        skills: [
            { title: "React", image: SkillImages.react },
            { title: "Redux", image: SkillImages.redux },
            { title: "React Router Dom", image: SkillImages.router },
            { title: "React Hook Form", image: SkillImages.form },
            { title: "React Query", image: SkillImages.query },
            { title: "Tailwindcss", image: SkillImages.tailwindcss },
            { title: "Bootstrap", image: SkillImages.bootstrap },
        ],
    },
    {
        title: "Technologies",
        icon: FaTools,
        skills: [
            { title: "Git", image: SkillImages.git },
            { title: "Github", image: SkillImages.github },
            { title: "Pnpm", image: SkillImages.pnpm },
        ],
    },
];

// export type PROJECT_TYPE = "React" | "Javascript";

// interface Project {
//     id: number;
//     title: string;
//     image: string;
//     demoUrl: string;
//     codeUrl: string;
// }

// export const PROJECTS: { [type: string]: Project[] } = {
//     React: [
//         {
//             id: 1,
//             title: "ReactNetflix",
//             image: Netflix,
//             demoUrl: "",
//             codeUrl: "",
//         },
//     ],
// };
