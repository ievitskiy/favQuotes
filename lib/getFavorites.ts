async function getFavorites () {

    let currentFavString = window.localStorage.getItem('favArray')
        
    if (currentFavString == null) {
        currentFavString = "";
    } else {
        currentFavString = JSON.parse(currentFavString);
    }

    
    let data: { [key: string]: any }[] = [{}];
    if (currentFavString){
        let currentFavArray = currentFavString.split(' ');
        currentFavArray = currentFavArray.filter(function(el) {
            return (el != null && el != "");
        });
        for (let i = 0; i < currentFavArray.length; i += 1){
          let url = 'https://api.quotable.io/quotes/' + currentFavArray[i];
          let response = await fetch(url);
          data[i] = await response.json();
        } 
    }
    return data;
};

export default getFavorites;
