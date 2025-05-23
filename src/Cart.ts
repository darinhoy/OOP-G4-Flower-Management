import { Customer } from "./Customer";
import { Flower } from "./Flower";

export class Cart extends Customer{
    private items: Flower[] = [];
    constructor(
        id: number,
        name: string,
        password: string,
        address: string,
        items: Flower[],
    ) {
        super(id, name, password, address);
        this.items = items
    }

    public addItems(): void{};

    public removeItems(): void{};
}