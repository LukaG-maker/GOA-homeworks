const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
        const data = await res.json();

        const postList = document.getElementById('post-list');

        data.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            postList.appendChild(li);
        });

    } catch (err) {
        console.log('error:', err);
    }
}

fetchData();
//await დალოდებას ნიშნავს და ამის საშუალებით ველოდებით კოდს
//try ცდილობას ნიშნავს
//catch დაჭერვას ნიშნავს შეცდომის დასაჭერად გამოიყენება