import { MutableRefObject, useEffect, useRef, useState } from "react";
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
        <header
            ref={headerRef}
            className={`fixed z-10 top-0 left-0 w-full text-white  ${
                scrollHeight > 80 ? "bg-slate-900 bg-opacity-90" : ""
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-8 ">
                <h2 className="text-3xl font-semibold">
                    Erfan <span className="text-red-600">Paya</span>
                </h2>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
