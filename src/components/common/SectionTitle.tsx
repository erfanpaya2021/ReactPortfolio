import { FunctionComponent, ReactNode } from "react";
import tw from "twin.macro";

interface Props {
    children: ReactNode;
}

const SectionTitle: FunctionComponent<Props> = ({ children }) => {
    return (
        <h2 tw="flex items-center text-2xl sm:text-3xl text-center font-semibold text-white">
            {children}
            <span tw="inline-block ml-4 w-40 sm:w-60 h-1 bg-red-600 "></span>
        </h2>
    );
};

export default SectionTitle;
