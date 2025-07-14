function filter(numbers) {
    const filteredArr = [];
    for (let i = 0; i < numbers.lenght; i++){
        if (numbers[i] % 2 === 0) {
            filter2.push(numbers[i]);
        }
    }
    return filter2
}

function sumnumber(number) {
    let sum = 0;

    for (let i = 0; i < number.lenght; i++) {
        sum += numbers[i;];
    }

    return sum;
}


const realFriends = function(names) {
    const friends = [];

    for(let i = 0; i < names.length; i++) {
        if(names[i].length >= 4) {
            friends.push(names[i])
        }
    }

    return friends;
}
