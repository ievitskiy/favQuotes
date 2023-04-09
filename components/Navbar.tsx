import React, {useCallback, useEffect, useState} from "react";
import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"
import {BsChevronDown} from 'react-icons/bs';
import {BiCategory} from 'react-icons/bi';
import {AiOutlineStar} from 'react-icons/ai';
import router from "next/router";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showBackground,
        setShowBackground] = useState(false);

    const [showMobileMenu,
        setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(false);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav
            className={`w-full sticky top-0 z-40 flex justify-start sm:justify-center duration-1000 ${showBackground
            ? 'bg-white border-b-4 border-y-zinc-900'
            : 'bg-zinc-900 border-b-2 border-y-zinc-900'} `}>
            <div
                className={`px-4 w-[50%] md:px-16 py-6 flex flex-row justify-between transition`}>

                <div className={`font-mono cursor-pointer font-bold text-2xl text-white 
                    ${showBackground ? 'text-zinc-900': 'text-white'} `} 
                    onClick={() => router.push(`/`)}>
                    
                    favQUOTES
                    </div>
                <div
                    className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
            ">
                    <NavbarItem
                        showBgProp={showBackground}
                        label="Saves"
                        redirectUrl="saves"
                        icon={< AiOutlineStar size = {
                        30
                    }
                    className = {
                        `text-white mr-1 mb-0.5 ${showBackground
                            ? 'text-zinc-900'
                            : 'text-white'}`
                    } />}/>

                    <NavbarItem
                        showBgProp={showBackground}
                        label="Categories"
                        redirectUrl="categories"
                        icon={< BiCategory size = {
                        30
                    }
                    className = {
                        `text-white mr-1 mb-0.5 ${showBackground
                            ? 'text-zinc-900'
                            : 'text-white'}`
                    } />}/>

                </div>
                <div
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p
                        className={`font-mono ml-1 text-xl text-white cursor-pointer hover:text-gray-100 transition ${showBackground
                        ? 'text-zinc-900'
                        : 'text-white'} `}>
                        Browse
                    </p>
                    <BsChevronDown
                        size={20}
                        className={`text-white transition ${showMobileMenu
                        ? 'rotate-180'
                        : 'rotate-0'} 
                        ${showBackground
                            ? 'text-zinc-900'
                            : 'text-white'} `}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
