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

import { SKILL_IMAGES, PROJECT_IMAGES } from "../constants/images";

// Navbar
export const NAV_ITEMS = [
    { title: "home", icon: FaHome },
    { title: "about", icon: FaUser },
    { title: "skills", icon: FaBrain },
    { title: "projects", icon: FaCode },
    { title: "contact", icon: FaEnvelope },
];

// Skills
interface Skill {
    title: string;
    image: string;
}
interface SkillCate {
    title: string;
    icon: IconType;
    skills: Skill[];
}

export const SKILLS_DATA: SkillCate[] = [
    {
        title: "Languages",
        icon: FaCode,
        skills: [
            { title: "HTML", image: SKILL_IMAGES.html },
            { title: "CSS", image: SKILL_IMAGES.css },
            { title: "Sass", image: SKILL_IMAGES.sass },
            { title: "Javascript", image: SKILL_IMAGES.javascript },
            { title: "Typescript", image: SKILL_IMAGES.typescript },
        ],
    },
    {
        title: "Frameworks",
        icon: FaBookReader,
        skills: [
            { title: "React", image: SKILL_IMAGES.react },
            { title: "Redux", image: SKILL_IMAGES.redux },
            { title: "React Router Dom", image: SKILL_IMAGES.router },
            { title: "React Hook Form", image: SKILL_IMAGES.form },
            { title: "React Query", image: SKILL_IMAGES.query },
            { title: "Tailwindcss", image: SKILL_IMAGES.tailwindcss },
            { title: "Bootstrap", image: SKILL_IMAGES.bootstrap },
        ],
    },
    {
        title: "Technologies",
        icon: FaTools,
        skills: [
            { title: "Git", image: SKILL_IMAGES.git },
            { title: "Github", image: SKILL_IMAGES.github },
            { title: "Pnpm", image: SKILL_IMAGES.pnpm },
        ],
    },
];

export type PROJECT_TYPE = ["All", "React", "Javascript"];

interface Project {
    id: number;
    title: string;
    type: ProjectTypes;
    image: string;
    techs: string[];
    demoUrl: string;
    codeUrl: string;
}

export type ProjectTypes = "All" | "React" | "Javascript";

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "React Netflix",
        type: "React",
        image: PROJECT_IMAGES.netflix,
        techs: [
            SKILL_IMAGES.react,
            SKILL_IMAGES.typescript,
            SKILL_IMAGES.tailwindcss,
            SKILL_IMAGES.redux,
            SKILL_IMAGES.router,
            SKILL_IMAGES.query,
            SKILL_IMAGES.pnpm,
        ],
        demoUrl: "https://react-netflix-hp0098.netlify.app/",
        codeUrl: "https://github.com/erfanpaya2021/ReactNetflix",
    },
    {
        id: 2,
        title: "React Store",
        type: "React",
        image: PROJECT_IMAGES.store,
        techs: [
            SKILL_IMAGES.react,
            SKILL_IMAGES.typescript,
            SKILL_IMAGES.tailwindcss,
            SKILL_IMAGES.router,
            SKILL_IMAGES.query,
        ],
        demoUrl: "https://reactstore-hp0098.netlify.app/",
        codeUrl: "https://github.com/erfanpaya2021/ReactStore",
    },
    {
        id: 3,
        title: "Portfolio(Older version)",
        type: "Javascript",
        image: PROJECT_IMAGES.portfolio,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.sass, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/portfolio/",
        codeUrl: "https://github.com/erfanpaya2021/portfolio",
    },
    {
        id: 4,
        title: "Shopping Cart",
        type: "Javascript",
        image: PROJECT_IMAGES.shopping,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/shopping-cart/",
        codeUrl: "https://github.com/erfanpaya2021/shopping-cart",
    },
    {
        id: 9,
        title: "Clock",
        type: "Javascript",
        image: PROJECT_IMAGES.clock,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/clock-app/",
        codeUrl: "https://github.com/erfanpaya2021/clock-app",
    },
    {
        id: 7,
        title: "Weather",
        type: "Javascript",
        image: PROJECT_IMAGES.weather,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/weather-app/",
        codeUrl: "https://github.com/erfanpaya2021/weather-app",
    },

    {
        id: 6,
        title: "Calculator",
        type: "Javascript",
        image: PROJECT_IMAGES.calculator,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/calculator-app/",
        codeUrl: "https://github.com/erfanpaya2021/calculator-app",
    },
    {
        id: 12,
        title: "Todo App ",
        type: "Javascript",
        image: PROJECT_IMAGES.todo,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/todo-app/",
        codeUrl: "https://github.com/erfanpaya2021/todo-app",
    },

    {
        id: 8,
        title: "Form Validation",
        type: "Javascript",
        image: PROJECT_IMAGES.formvalidation,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/form-validation/",
        codeUrl: "https://github.com/erfanpaya2021/form-validation",
    },

    {
        id: 10,
        title: "Quiz App v1",
        type: "Javascript",
        image: PROJECT_IMAGES.quiz1,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/quiz-app/",
        codeUrl: "https://github.com/erfanpaya2021/quiz-app",
    },
    {
        id: 11,
        title: "Quiz App v2",
        type: "Javascript",
        image: PROJECT_IMAGES.quiz2,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/quiz-app2/",
        codeUrl: "https://github.com/erfanpaya2021/quiz-app2",
    },

    {
        id: 5,
        title: "Filter Products",
        type: "Javascript",
        image: PROJECT_IMAGES.filterProducts,
        techs: [SKILL_IMAGES.html, SKILL_IMAGES.css, SKILL_IMAGES.javascript],
        demoUrl: "https://erfanpaya2021.github.io/products-filter/",
        codeUrl: "https://github.com/erfanpaya2021/products-filter",
    },
];
