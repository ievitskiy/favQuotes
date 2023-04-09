import Navbar from "@/components/Navbar";
import RandomQuotesList from "@/components/RandomQuotesList";
import useRandomQuotes from "@/hooks/useRandomQuotes";

export default function Home() {
    const { data: randomQuotes = []} = useRandomQuotes();
    return ( 
    <> 
    <Navbar/> 
    <RandomQuotesList data={randomQuotes}/>
    </>
  )
}