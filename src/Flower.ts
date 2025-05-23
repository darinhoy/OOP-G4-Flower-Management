export class Flower {
    private id: number;
    private name: string;
    private color: string;
    private price: number;
    private stock: number; // Added stock property to track quantity

    constructor(id: number, name: string, color: string, price: number, stock: number = 0) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.price = price;
        this.stock = stock; // Initialize stock in constructor
    }

    public updateStock(quantity: number): void {
        if (quantity < 0 && Math.abs(quantity) > this.stock) {
            throw new Error(`Cannot reduce stock below 0 for ${this.name}. Current stock: ${this.stock}`);
        }
        this.stock += quantity;
        if (this.stock < 0) {
            this.stock = 0; // Ensure stock doesn't go negative
        }
    }

    // Optional: Getter for stock to access it outside the class
    public getStock(): number {
        return this.stock;
    }
}