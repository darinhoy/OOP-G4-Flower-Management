export class Category {
    private categories: string[] = [];

    constructor(private name: string) {
        this.categories.push(name);
    }

    public addCategory(categoryName: string): void {
        this.categories.push(categoryName);
        console.log(`Category "${categoryName}" added.`);
    }

    public removeCategory(categoryName: string): void {
        this.categories = this.categories.filter(c => c !== categoryName);
        console.log(`Category "${categoryName}" removed.`);
    }
}
