export default (url) => {

    const baseUrl = 'https://jsonplaceholder.typicode.com'
    console.log('------------------------');
    console.log(baseUrl + url);
    console.log('------------------------');

    return fetch(baseUrl+url).then(value => value.json())
}

