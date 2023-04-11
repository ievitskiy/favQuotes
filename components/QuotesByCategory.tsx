import React, {useCallback, useEffect, useState} from "react";
import QuoteCard from "./QuoteCard";
import getByCategory from "@/hooks/getByCategory";

const QuotesByCategory = () => {
    const [currentCategory, setCurrentCategory] = useState("wisdom");
    const [currentData, setCurrentData] = useState<Record < string,any >>();
    const categoryList = ["wisdom", "famous-quotes", "motivational", "freedom", "friendship", "technology", "life"];

    const toggleCategory = useCallback((category: string) => {
        setCurrentCategory(category)
    }, [])

    useEffect(() => {
        getByCategory(currentCategory).then(res => setCurrentData(res));

    }, [currentCategory])

    return (
        <div className="relative px-4 md:px-12  space-y-8 flex w-full justify-center">
            <div className="sm:w-[90%] lg:w-[60%] 2xl:w-[50%]">
                    <div className="">
                        <div className="sm:flex sm:flex-col sm:items-center">
                            <div className="sm:flex sm:flex-row">
                            {categoryList.map((category) => (
                                <p className={`text-xl text-white mr-2
                                 ${currentCategory != category ? "cursor-pointer hover:text-zinc-400" : "text-zinc-400"}
                                `}
                                onClick={() => toggleCategory(category)}>
                                    {category}
                                </p>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row align-center">
                        <p className="text-white text-2xl font-semibold mb-4">
                            Quotes from the category {currentCategory}
                        </p>
                    </div>
                    <div className="gap-2 flex flex-col">
                        {currentData?.results?.map((quote: Record < string,any >) => (<QuoteCard key={quote._id} data={quote}/>))}
                    </div>
                
            </div>

            

        </div>
    )

}

export default QuotesByCategory;