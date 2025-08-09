class vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    igniteEngine() {
        console.log(`the engine ofm this ${this.brand} was made in ${this.year}`);
    }
}

class car extends vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
    }

    honk() {
        console.log("beep beep!");
    }
}

class motorcycle extends vehicle {
    constructor(brand, year, hasSideCar) {
    super(brand, year);
    this.hasSideCar
    }

    revEngine() {
        console.log("vrooom")
    }
}