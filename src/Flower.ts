export class Flower {
    private stock: number = 0;

    constructor(
        private id: number,
        private name: string,
        private color: string,
        private price: number
    ) {}

    public updateStock(amount: number): void {
        this.stock += amount;
        console.log(`Stock updated. Current stock: ${this.stock}`);
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public getPrice(): number {
        return this.price;
    }
}
