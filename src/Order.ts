import { Admin } from "./Admin";
import { Customer } from "./Customer";
import { Flower } from "./Flower";

export class Order extends Admin {
    constructor(
        id: number,
        name: string,
        password: string, 
        private orderId: number,
        private customer: Customer,
        private flowers: Flower[] = [],
    ) {
        super(id, name, password)
    }

    public placeOrder(): void {};

}