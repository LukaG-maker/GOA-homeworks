const fetchData = async () => {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
    }catch(err) {
        console.log(err);
    }
}

fetchData();
//await დალოდებას ნიშნავს და ამის საშუალებით ველოდებით კოდს
//try ცდილობას ნიშნავს
//catch დაჭერვას ნიშნავს შეცდომის დასაჭერად გამოიყენება
//async აბრუნებს პრომის