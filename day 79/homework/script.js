 function renderProducts() {
    const products = document.querySelectorAll('.product');
    products.forEach((product) => {
        const button = product.querySelector('button');

        button.addEventListener('click', () => {
            addToCart(product);
        });
    });
}
let cart = [];
function addToCart(product) {

    const uniqueId = 'prod-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

    const productData = {
        id: uniqueId,
        name: product.querySelector('.product-name').innerText,
        price: product.querySelector('.product-price').innerText
    };

    cart.push(productData);
    console.log(cart);
}

renderProducts();