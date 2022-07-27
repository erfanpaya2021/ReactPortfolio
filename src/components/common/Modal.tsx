import { Fragment, FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";
import tw, { styled } from "twin.macro";

interface Props {
    children: ReactNode;
    active: boolean;
}

const Overlay = styled.div(({ active }: { active: boolean }) => [
    tw`fixed z-20 top-0 left-0 w-screen h-screen bg-white/30 transition-transform duration-1000`,
    active ? tw`translate-x-0` : tw`translate-x-[-100%]`,
]);

const Modal: FunctionComponent<Props> = ({ children, active }) => {
    return (
        <Fragment>
            {createPortal(children, document.getElementById("modal")!)}
            {createPortal(
                <Overlay active={active} />,
                document.getElementById("overlay")!,
            )}
        </Fragment>
    );
};

export default Modal;
