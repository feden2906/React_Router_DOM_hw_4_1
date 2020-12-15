export default (id) => {
    return fetch(this.url + `/${id}`)
        .then(value => value.json())
        .then(value => value)
}

