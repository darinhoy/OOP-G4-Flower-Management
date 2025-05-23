import { User } from "./User";

export class Admin extends User {
    constructor(
        id: number,
        name: string,
        password: string,
    ){super(id, name, password)}

    public addFlower(): void {};
    public removeFlower(): void {};
}