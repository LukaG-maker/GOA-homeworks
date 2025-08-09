class Account {
  constructor(email, username) {
    this.email = email;
    this.username = username;
  }

  static getFromStorage(key) {
    const storedData = localStorage.getItem(key);

    const parsedData = JSON.parse(storedData);

    if (parsedData === null) {
      return [];
    }

    return parsedData;
  }

  static checkIfExists(email) {

    const accounts = Account.getFromStorage("accounts");

    return accounts.some(account => account.email === email);
  }

  static AddToStorage(accountObj) {
    const accounts = Account.getFromStorage("accounts");

    if (Account.checkIfExists(accountObj.email)) {
      alert("Account creation unsuccessful: the provided email is already associated with a user profile.");
      return;
    }

    accounts.push(accountObj);

    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log("Registration completed.");
  }
}

// JSON  არის ტექსტური ფორმატი რომელიც გამოიყენება მონაცემების შესანახად ან გადასაცემად
//// localStorage — ბრაუზერში არსებული მეხსიერება  სადაც მონაცემების შენახვა შესაძლებელია გასაღებებით და მნიშვნელობებით


