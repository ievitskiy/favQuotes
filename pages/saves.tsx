import Navbar from "@/components/Navbar";
import LocalQuotesList from "@/components/LocalQuotesList";
import getFavorites from "@/lib/getFavorites";
import { useEffect, useState } from "react";
import EmptyQuotesList from "@/components/EmptyQuotesList";
import favoritesIsEmpty from "@/lib/favoritesIsEmpty";

export default function Home() {
    const [quote, setQuote] = useState<Record<string, any>[]>([]);
    const [isEmpty, setIsEmpty] = useState<Boolean>();
    useEffect(() => {
      getFavorites().then(res => setQuote(res));
      favoritesIsEmpty().then(res => setIsEmpty(res));
    },[])
    return ( 
    <> 
    <Navbar/> 
    {isEmpty ? <EmptyQuotesList /> : <LocalQuotesList data={quote}/>}
    </>
  )
}