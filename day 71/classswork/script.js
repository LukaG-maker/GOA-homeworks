class account {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;

    }

    #email;
    #password;


    introduce() {
        console.log("hello my name is:" + this.name);
    }

    set password(newpassword) {
        if (newpassword.length < 6) {
            console.log("password must contain at least 6 symbols");
            return;
        }
    }

    get email() {
        return this.#email;
    }
}

