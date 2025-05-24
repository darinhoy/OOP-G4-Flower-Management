import { User } from "./User";
import { Cart } from "./Cart";

export class Customer extends User {
        constructor(id: number, name: string, password: string, private address: string, private cart: Cart){
                super(id, name, password);
        }

        public register(): void{
                
        }
}