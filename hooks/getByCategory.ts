async function getByCategory (tag: string) {

    let data: { [key: string]: any } = [];

    let url = 'https://api.quotable.io/quotes?tags=' + tag;
    let response = await fetch(url);
    data = await response.json();

    return data;
};

export default getByCategory;
