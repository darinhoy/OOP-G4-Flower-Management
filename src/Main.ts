import { Flower } from "./Flower";

let rose = new Flower(1, "Rose", "Red", 2.5, 10);
rose.updateStock(50); // Increases stock to 150
console.log(rose.getStock()); // Output: 150
rose.updateStock(-30); // Decreases stock to 120
console.log(rose.getStock()); // Output: 120