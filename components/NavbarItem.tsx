import React from "react";
import {useRouter} from 'next/router';

interface NavbarItemProps {
    label : string;
    redirectUrl : string;
    icon : JSX.Element | JSX.Element[];
    showBgProp: boolean;
}

const NavbarItem : React.FC < NavbarItemProps > = ({label, redirectUrl, icon, showBgProp}) => {
    const router = useRouter();

    return (
        <nav
            onClick={() => router.push(`/${redirectUrl}`)}
            className={`font-mono ml-1 text-xl text-white cursor-pointer hover:text-gray-400 transition
            ${showBgProp
                ? 'text-zinc-900'
                : 'text-white'}
            `}>
            <div className="flex-row lg:flex">
                {icon}
                {label}
            </div>
        </nav>
    )
}

export default NavbarItem;
