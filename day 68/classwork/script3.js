const person = {
    firstname: "luka",
    lastname: "gvelukashvili",
    introduce: function() {
        console.log("ჩემი სახელია " + this.firstname + " " + this.lastname);
    }
};

person.introduce();