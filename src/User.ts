export abstract class User {
    constructor(
        private id: number,
        private name: string,
        private password: string
    ){

    }

    public login(): void {};


    public logout(): void{};
}