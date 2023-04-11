import React, { useCallback, useEffect, useState } from "react";

import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

interface QuoteCardProps {
    data : Record < string,
    any >;
}

const QuoteCard : React.FC < QuoteCardProps > = ({data}) => {
    const [isFavorite, setIsFavorite] = useState<Boolean>();
    let isEmpty = false;
    useEffect(() => {
        let currentFavArray = window.localStorage.getItem('favArray')
        
        if (currentFavArray == null) {
            currentFavArray = "";
        } else {
            currentFavArray = JSON.parse(currentFavArray);
        }

        if (currentFavArray?.includes(data?._id)) {
            setIsFavorite(true);
        }
        else{
            setIsFavorite(false);  
        }
    }, [])

    const toggleAddFavorite = useCallback(() => {
        let currentFavArray = window.localStorage.getItem('favArray')
        
        if (currentFavArray == null) {
            currentFavArray = "";
        } else {
            currentFavArray = JSON.parse(currentFavArray);
        }

        if (currentFavArray?.includes(data?._id)) {
            let updatedFavArray = currentFavArray.replace(data?._id, '');
            setIsFavorite(false);
            window.localStorage.setItem('favArray', JSON.stringify(updatedFavArray));
        }
        else{
            setIsFavorite(true);
            window.localStorage.setItem('favArray', JSON.stringify(currentFavArray + " " + data?._id));     
        }
    }, []);

    const Icon = isFavorite ? AiFillStar : AiOutlineStar ;

    return (
        <div >
            <div className="bg-white rounded-md group col-span relative">
                <div className="flex flex-row">
                    <div className=" mt-2 ml-3 mb-2 w-[70%] text-sm sm:text-xl">
                        {data
                            ?.content}
                    </div>
                    <div className=" mt-2 mr-2 ml-2 mb-2 w-[30%] text-zinc-500 flex flex-col ">
                        <div className="w-full text-sm sm:text-xl font-semibold">
                        {data
                            ?.author}
                        </div>
                        

                        <div className="text-zinc-500 w-full text-[10px] sm:text-sm font-semibold">
                        {data?.tags.map((tag: string) => (<div className="mr-1"> {`${tag}`} </div>))}
                        </div>

                            <hr className="mt-1" />

                        <div className="cursor-pointer w-full text-[12px] sm:text-lg flex flex-row items-center text-zinc-500 font-semibold"
                            onClick={() => toggleAddFavorite()}
                        >
                            <Icon className="mr-1" size={23}/>
                            {isFavorite ? "Saved!" : "Save"}
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default QuoteCard;
