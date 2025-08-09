function manualMap(arrayOfNames){
    let result = [];

    for(let i = 0; i < arrayOfNames.length; i++){
        result.push(`Hello ${arrayOfNames[i]}`)
    }

    return result;
}

const greetNames = ['Nino', 'luka', 'giorgi'];
const greetName = greetNames.map((name) => `Hello ${name}`);
console.log(greetName);
console.log(manualMap)(greetNames);