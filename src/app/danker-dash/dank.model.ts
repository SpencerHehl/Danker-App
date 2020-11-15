import { User } from '../user.model';

export class Dank {
    danker: User;
    dankee: User;
    dankText: string;
    dateTime: string;
}

export class DankLeaderStats {
    leaderName: string;
    leaderStatValue: number;
}
