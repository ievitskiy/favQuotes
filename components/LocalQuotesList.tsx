import React, { useCallback, useState } from "react";

import {isEmpty} from 'lodash';
import QuoteCard from "./QuoteCard";
import {BiRefresh} from "react-icons/bi";

interface QuoteListProps {
    data : Record < string,
    any > [];
}

const LocalQuotesList : React.FC < QuoteListProps > = ({data}) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="relative px-4 md:px-12 space-y-8 flex w-full justify-center">
            <div className="sm:w-[90%] lg:w-[50%]">
                <div className="">
                    <div className="flex flex-row align-center">
                    <p className="text-white text-2xl font-semibold mb-4">
                        Your favorite quotes
                    </p>
                    </div>
                    
                </div>
                
                <div className="gap-2 flex flex-col">
                    {data.map((quote) => (<QuoteCard key={quote._id} data={quote}/>))}
                </div>
            </div>
        </div>
    )

}

export default LocalQuotesList;