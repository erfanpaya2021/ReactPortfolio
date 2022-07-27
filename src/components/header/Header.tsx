import { MutableRefObject, useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import { Container } from "../common";

import Navbar from "./Navbar";

const Header = () => {
    const headerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const scrollHeightChangeHandler = (event: any) => {
            setScrollHeight(window.scrollY);
        };

        window.addEventListener("scroll", scrollHeightChangeHandler);

        return () => {
            window.removeEventListener("scroll", scrollHeightChangeHandler);
        };
    }, [scrollHeight]);

    return (
        <TWHeader ref={headerRef} scrollHeight={scrollHeight}>
            <Container tw="flex items-center justify-between h-16">
                <h2 tw="text-3xl font-semibold">
                    Erfan <span tw="text-red-600">Paya</span>
                </h2>
                <Navbar />
            </Container>
        </TWHeader>
    );
};

const TWHeader = styled.header(({ scrollHeight }: { scrollHeight: number }) => [
    tw`fixed z-10 top-0 left-0 w-full text-white`,
    scrollHeight > 80 ? tw`bg-slate-900 bg-opacity-90` : tw`bg-slate-800`,
]);

export default Header;
