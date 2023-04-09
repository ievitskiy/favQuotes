async function favoritesIsEmpty () {

    let currentFavString = window.localStorage.getItem('favArray')
        
    if (currentFavString == null) {
        currentFavString = "";
    } else {
        currentFavString = await JSON.parse(currentFavString);
    }

    if (currentFavString == null){
        return true}
    currentFavString = currentFavString.replace(/\s/g,'');
    
    if (currentFavString == null || currentFavString == "" || currentFavString.trim() == ''){
        return true;
    }
    return false;
};

export default favoritesIsEmpty;