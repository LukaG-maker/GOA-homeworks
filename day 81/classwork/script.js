fetch(https:/fakestoreapi.com/products), {
    method: "POST",

    headers: {
        "content-type": "application/json"
    },

    body: JSON.stringify({
        title: "grey sweatshirt",
        price: 19.99,
        description:"a classic sweat shirt from 1997"
    })
}
fetchData();