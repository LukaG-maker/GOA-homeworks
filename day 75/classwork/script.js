//1
const executoirn = () => {
    return new Promise((resolve) => {
        setTimeout(( ) => {resolve("resolved")}, 5000)
    })
}

const prom = executoirn();

//2

const executoirn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {resolve("rejected")}, 5000)
    })
}

const prom2 = executoirn();
//3


fetch('https://fakestoreapi.com/products')

  .then((response) => {
    if (!response.ok) {

      throw new Error(`webs problem: ${response.status} ${response.statusText}`);
    }

    return response.json();
  })

  .then((products) => {
    console.log('taken products:', products);

    if (Array.isArray(products) && products.length > 0) {
      console.log('first product:', products[0].title);
    }
  })

  .catch((err) => {
    console.error('mistake found:', err.message);
  })

  .finally(() => {
    console.log('requests cycle done)');
  });

  //fetch ბრაუზერში ჩაშენებული ფუნქციაა რომ გადვმოვთარგმნოთ ნიშნავს მოტანვას და აბრუნებს პრომის