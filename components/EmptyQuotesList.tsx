import router from "next/router";

const EmptyQuotesList = () => {
    return (
        <div className="relative px-4 md:px-12 space-y-8 flex w-full justify-center">
            <div className="sm:w-[90%] lg:w-[50%] flex flex-col items-center">
                
                <p className="text-white sm:text-2xl lg:text-4xl font-semibold mb-1 flex items-center">
                    There's nothing here now!
                </p>
                <p className="sm:text-2xl lg:text-xl text-zinc-400 font-semibold  flex items-center hover:text-zinc-300 cursor-pointer"
                    onClick={() => router.push(`/`)}
                >
                    Go to main page and add something
                </p>
                    
                
            </div>
        </div>
    )
}

export default EmptyQuotesList;
