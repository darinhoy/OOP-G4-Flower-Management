export abstract class User {
    constructor(
        private id: number,
        private name: string,
        private password: string,
        private loggedIn: boolean = false
    ) {}

    public login(): void {
        if (!this.name || !this.password) {
            console.log("Login failed: Name or password is missing.");
            return;
        }

        this.loggedIn = true;
        console.log(`${this.name} logged in successfully.`);
    }

    public logout(): void {
        
    }
}