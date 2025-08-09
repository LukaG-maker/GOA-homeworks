const changePassword = {
  _email: "idk.gmail",
  _pass: "secret123",
  fullname: "idk idk",

  set pass(newPass) {
    if (newPass.length >= 6) {
      this._pass = newPass;
      console.log("the password succsesfully changed");//აი მას ეს არის სეტტერი
    } else {
      console.log("the passwords length is not the minimum requirment of 6 letters");
    }
  },

  get email() {
    return this._email;//ეს გეტტერი
  },

  hello() {
    console.log(`i am ${this.fullname}`);// ეს კიდევ უბრალოდ მეთოდი დიდად არაფერი
  }
};

