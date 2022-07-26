import { FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    active: boolean;
}

const Modal: FunctionComponent<Props> = ({ children, active }) => {
    return (
        <>
            {createPortal(children, document.getElementById("modal")!)}
            {createPortal(
                <div
                    className={`fixed z-20 top-0 left-0 w-screen h-screen bg-white/30 transition-transform duration-1000  ${
                        active ? "translate-x-0" : "translate-x-[-100%]"
                    }`}
                />,
                document.getElementById("overlay")!,
            )}
        </>
    );
};

export default Modal;
