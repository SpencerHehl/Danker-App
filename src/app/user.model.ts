export class User {
    public displayName: string;
    public email: string;
    public userId: string;
    public _id?: string;

    constructor(displayName?: string, email?: string, userId?: string) {
        this.displayName = displayName;
        this.email = email;
        this.userId = userId;
    }
}
