export class User {
    displayName: string;
    email: string;
    userId: string;

    constructor(displayName: string, email: string, userId: string) {
        this.displayName = displayName;
        this.email = email;
        this.userId = userId;
    }
}
