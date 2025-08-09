class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `This animal's name is ${this.name} and it is ${this.age} years old.`;
  }
}


