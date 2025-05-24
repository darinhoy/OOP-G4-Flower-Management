import { Admin } from "./Admin";
import { Customer } from "./Customer";
import { Flower } from "./Flower";

export class Order  {
    constructor( 
        private orderId: number,
        private customer: Customer,
        private flowers: Flower[] = [],
    ) {

    }

    public placeOrder(): void {};

}