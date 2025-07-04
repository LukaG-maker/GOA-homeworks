const me ={
    name: luka,
    lastname: gvelukashvili,
    age: 13, 
    city: tbilisi, 
    height: 178, 
    favouriteSport: football,
    street: {
        streetname: kindzmarauli,
        streetNumber: N5,
    }
}

me.age = 14;

console.log(me.age)

delete me.favouriteSport;

console.log(me)

console.log(me.street.streetname.streetNumber)