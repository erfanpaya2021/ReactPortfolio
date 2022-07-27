import { FunctionComponent } from "react";
import tw from "twin.macro";

interface Props {
    firstText: string;
    secondText: string;
}

const SectionTitle: FunctionComponent<Props> = ({ firstText, secondText }) => {
    return (
        <h2 tw="flex items-center text-xl sm:text-3xl text-center font-semibold text-white">
            <span tw="text-red-600">{firstText}</span>&nbsp;{secondText}
            <span tw="inline-block ml-4 w-40 sm:w-60 h-1 bg-red-600 "></span>
        </h2>
    );
};

export default SectionTitle;
