import { User } from "./User";

export class Customer extends User {
        constructor(id: number, name: string, password: string, private address: string){
                super(id, name, password);
                this.address = address;
        }

        public register(): void{
                
        }
}