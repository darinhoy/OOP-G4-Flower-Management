import { Order } from "./Order";
import { PaymentType } from "./PaymentType";

export class Payment {
    constructor(
        private order: Order,
        private paymentType: PaymentType
    ){
        
    }

    public makePayment(): void {};

}