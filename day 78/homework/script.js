const fetchData = async () => {
    try{
        const res = await fetch('https://www.codewars.com/kata/5cd12646cf44af0020c727dd/javascript');
        const data = await res.json();
    }catch(err) {
        console.log(err);
    }
}

fetchData();