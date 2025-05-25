import { Flower } from "./Flower";

export class Cart {
    constructor(private items: Flower[] = []) {}

    public addItems(flower: Flower): void {
        this.items.push(flower);
        console.log(`Added ${flower.getName()} to cart.`);
    }

    public removeItems(flowerId: number): void {
        this.items = this.items.filter(f => f.getId() !== flowerId);
        console.log(`Removed flower with ID this.flower from cart.`);
    }

    public getItems(): Flower[] {
        return this.items;
    }
}
