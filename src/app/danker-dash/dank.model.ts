import { User } from '../user.model';

export class Dank {
    public danker: User;
    public dankee: User;
    public dankText: string;
    public dateTime: string;
    public _id?: string;
}

export class DankLeaderStats {
    _id: string;
    leaderInfo: User;
    count: number;
}
