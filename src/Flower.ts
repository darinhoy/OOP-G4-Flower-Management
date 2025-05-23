export class Flower {
    private id : number;
    private name : string;
    private color : string;
    private price : number;
    
    constructor(id: number, name: string, color: string, price: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.price = price;
    }

    public updateStock(): void {}
}