class Account {
  constructor(email, username) {
    this.email = email;
    this.username = username;
  }

 
  static accounts = [];

  
  static checkIfExists(email) {
    return Account.accounts.some(account => account.email === email);
  }

  //2
  static AddToStorage(account2) {
    if (Account.checkIfExists(account2.email)) {
      alert("Registration failed: An account with this email is already registered.");
      return;
    }

    Account.accounts.push(account2);
    console.log("the register procces was succsesfull");
  }
}
