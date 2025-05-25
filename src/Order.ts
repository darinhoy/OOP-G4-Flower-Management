import { Customer } from "./Customer";
import { Flower } from "./Flower";

export class Order {
    constructor(
        private orderId: number,
        private customer: Customer,
        private flowers: Flower[] = [],
    ) {}

    public placeOrder(): void {
        console.log(`Order ${this.orderId} placed by ${this.customer.getName()}.`);
        this.flowers.forEach(f => {
            console.log(` - ${f.getName()} - $${f.getPrice()}`);
        });
    }

    public getTotal(): number {
        return this.flowers.reduce((sum, f) => sum + f.getPrice(), 0);
    }
}
