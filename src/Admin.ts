import { User } from "./User";
import { Flower } from "./Flower";

export class Admin extends User {
    private flowers: Flower[] = [];

    public addFlower(flower: Flower): void {
        this.flowers.push(flower);
        console.log(`Flower "${flower.getName()}" added by Admin.`);
    }

    public removeFlower(flowerId: number): void {
        this.flowers = this.flowers.filter(f => f.getId() !== flowerId);
        console.log(`Flower with ID ${flowerId} removed by Admin.`);
    }
}
