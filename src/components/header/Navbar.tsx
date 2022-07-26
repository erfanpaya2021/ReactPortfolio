import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Modal } from "../common";
import { navItems } from "../../data";

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
            <ul className="hidden md:flex items-center gap-6">
                {navItems.map(item => (
                    <li
                        className="flex items-center gap-1 transition-colors duration-500 hover:text-red-600"
                        key={item.title}
                    >
                        {<item.icon className="w-5" />}
                        <a
                            className="capitalize font-semibold"
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
                className="md:hidden text-3xl transition-colors duration-500 cursor-pointer hover:text-red-600"
            />
            <Modal active={openMenu}>
                <div
                    className={`fixed z-30 top-0 right-0  w-56 h-screen bg-teal-900 text-white transition-transform duration-700 ${
                        openMenu ? "translate-x-0" : "translate-x-[100%]"
                    }`}
                >
                    <FaTimes
                        onClick={() => setOpenMenu(false)}
                        className="absolute top-4 left-4 text-3xl transition-colors duration-500 cursor-pointer hover:text-red-600"
                    />
                    <ul className="flex flex-col items-center justify-between h-full gap-6">
                        {navItems.map(item => (
                            <li
                                onClick={() => setOpenMenu(false)}
                                className="flex justify-center items-center h-full gap-1 transition-colors duration-500 hover:text-red-600"
                                key={item.title}
                            >
                                {<item.icon className="w-5" />}
                                <a
                                    className="capitalize font-semibold"
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
