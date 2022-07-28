import { useEffect, useState } from "react";
import tw from "twin.macro";
import { FaBars, FaTimes } from "react-icons/fa";

import { Modal } from "../common";
import { NAV_ITEMS } from "../../data";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const checkSizeForMenu = () => {
            if (window.innerWidth >= 768) setOpenMenu(false);
        };

        window.addEventListener("resize", checkSizeForMenu);

        return () => {
            window.removeEventListener("resize", checkSizeForMenu);
        };
    }, [window.innerWidth]);

    return (
        <nav>
            <ul tw="hidden md:flex items-center gap-6">
                {NAV_ITEMS.map(item => (
                    <li
                        tw="flex items-center gap-1 transition-colors duration-500 hover:text-red-600"
                        key={item.title}
                    >
                        {<item.icon tw="w-5" />}
                        <a
                            tw="capitalize font-semibold"
                            href={`#${item.title}`}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Responsive menu */}
            <FaBars
                onClick={() => setOpenMenu(true)}
                tw="md:hidden text-3xl transition-colors duration-500 cursor-pointer hover:text-red-600"
            />
            <Modal active={openMenu}>
                <div
                    css={[
                        tw`fixed z-30 top-0 right-0  w-56 h-screen bg-gray-700 text-white transition-transform duration-700`,
                        openMenu ? tw`translate-x-0` : tw`translate-x-[100%]`,
                    ]}
                >
                    <FaTimes
                        onClick={() => setOpenMenu(false)}
                        tw="absolute top-4 left-4 text-3xl transition-colors duration-500 cursor-pointer hover:text-red-600"
                    />
                    <ul tw="flex flex-col items-center justify-between h-full gap-6">
                        {NAV_ITEMS.map(item => (
                            <li
                                onClick={() => setOpenMenu(false)}
                                tw="flex justify-center items-center h-full gap-1 transition-colors duration-500 hover:text-red-600"
                                key={item.title}
                            >
                                {<item.icon className="w-5" />}
                                <a
                                    tw="capitalize font-semibold"
                                    href={`#${item.title}`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </nav>
    );
};

export default Navbar;
