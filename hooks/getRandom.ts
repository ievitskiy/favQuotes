async function getRandom() {
    let data: {[key: string]: any}[] = [{}];

    let url = 'https://api.quotable.io/quotes/random?limit=13';
    let response = await fetch(url);
    data = await response.json();

    return data;
}

export default getRandom;
