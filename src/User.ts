export abstract class User {
    constructor(
        private id: number,
        private name: string,
        private password: string,
    ) {}

     public login(): void {
        console.log(`${this.name} logged in`);
    }


    public logout(): void{
            console.log(`${this.name} logged out`);
    }

    public getName(): string {
        return this.name;
    }
}
