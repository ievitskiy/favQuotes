import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import NavbarItem from './NavbarItem';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu : React.FC < MobileMenuProps > = ({visible}) => {
    if (!visible) {
        return null;
    }

    return (
        <div
            className="bg-zinc-900 w-36 absolute top-8 left-0 py-5 flex-col border-2 border-zinc-800 flex">
            <div className="flex flex-col gap-4">
                <NavbarItem
                    showBgProp={false}
                    label="Saves"
                    redirectUrl="saves"
                    icon={<></>}/>

                <NavbarItem
                    showBgProp={false}
                    label="Categories"
                    redirectUrl="categories"
                    icon={<></>}/>
            </div>
        </div>
    )
};

export default MobileMenu;
