import React, { useCallback, useEffect, useState } from "react";

import QuoteCard from "./QuoteCard";
import {BiRefresh} from "react-icons/bi";
import getRandom from "@/hooks/getRandom";

const RandomQuotesList = () => {
    const [rotate, setRotate] = useState(false);
    const [currentData, setCurrentData] =  useState<Record <string,any>[]>();

    const toggleRotate = useCallback(() => {
        setRotate((current) => !current);
    }, []);

    useEffect(() => {
        getRandom().then(res => (setCurrentData(res)))

    }, [rotate])

    return (
        <div className="relative px-4 md:px-12 space-y-8 flex w-full justify-center">
            <div className="sm:w-[90%] lg:w-[50%]">
                <div className="">
                    <div className="flex flex-row align-center">
                    <p className="text-white text-2xl font-semibold mb-4">
                        Random quotes
                    </p>
                    <BiRefresh className={`cursor-pointer text-white ml-1 mt-0.5 duration-500 ${rotate ? 'rotate-0': 'rotate-180'}`} size={35}
                        onClick={toggleRotate}
                    />
                    </div>
                    
                </div>
                
                <div className="gap-2 flex flex-col">
                    {currentData?.map((quote) => (<QuoteCard key={quote._id} data={quote}/>))}
                </div>
            </div>
        </div>
    )

}

export default RandomQuotesList;