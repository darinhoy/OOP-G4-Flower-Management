import { Customer } from "./Customer";
import { Flower } from "./Flower";

export class Cart {
    constructor(private items: Flower[] = []){

    }
    

    public addItems(): void{};

    public removeItems(): void{};
}