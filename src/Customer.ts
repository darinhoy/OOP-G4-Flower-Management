import { User } from "./User";

export class Customer extends User {
    constructor(id: number, name: string, password: string, private address: string) {
        super(id, name, password);
    }

    public register(): void {
        console.log(`Customer "${this.getName()}" registered with address: ${this.address}`);
    }

    public getAddress(): string {
        return this.address;
    }
}
