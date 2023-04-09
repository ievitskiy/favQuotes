import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useRandomQuotes = () => {
    const { data, error, isLoading} = useSWR('https://api.quotable.io/quotes/random?limit=13', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    
    return {
        data,
        error,
        isLoading
    }
};

export default useRandomQuotes;