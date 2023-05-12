class Hamburger {
    static SIZE_SMALL = { 
        price: 50,
        calories: 20
         };
    static SIZE_LARGE = { 
        price: 100,
        calories: 40 
    };
    static TOPPING_MAYO = {
         price: 20,
        calories: 5 };
    static STUFFING_SALAD = { 
        price: 20, 
        calories: 5 
    };
    static STUFFING_POTATO = { 
        price: 15, 
        calories: 10 
    };
    static TOPPING_SPICE = { 
        price: 15, 
        calories: 0 
    };
    static STUFFING_CHEESE = { 
        price: 10, 
        calories: 20 
    };

    constructor(sizeBurger, stuffing) {
        this.sizeBurger = sizeBurger;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculate() {
        const price = this.sizeBurger.price + this.stuffing.price;
        const topping = this.toppings.reduce((sum, topping) => sum + topping.price, 0);
        return price + topping;
    }

    calculateCalories() {
        const calories = this.sizeBurger.calories + this.stuffing.calories;
        const toppingCalories = this.toppings.reduce((sum, topping) => sum + topping.calories, 0);
        return calories + toppingCalories;
    }
}


const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price: " + hamburger.calculate());

hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Price with spice: " + hamburger.calculate());

hamburger.addTopping(Hamburger.STUFFING_CHEESE);
console.log("Price with cheese: " + hamburger.calculate())
console.log("Calories: " + hamburger.calculateCalories());

