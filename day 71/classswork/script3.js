class Account {
  #email;
  #password;

  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.#email = email;
    this.#password = password;
  }

  set password(newPassword) {
    if (
      newPassword.length >= 6 &&
      hasLetter(newPassword) &&
      hasNumber(newPassword)
    ) {
      this.#password = newPassword;
      console.log("Password set successfully.");
    } else {
      console.log("Password must be at least 6 characters and contain both letters and numbers.");
    }
  }

  get email() {
    return this.#email;
  }
}

function hasLetter(str) {
  for (let char of str) {
    if (isNaN(char)) return true;
  }
  return false;
}

function hasNumber(str) {
  for (let char of str) {
    if (!isNaN(char)) return true;
  }
  return false;
}

const accounts = [];

document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newAccount = new Account(fullname, email, password);

  newAccount.password = password;

  accounts.push(newAccount);

  console.log("Accounts array:", accounts);
});


