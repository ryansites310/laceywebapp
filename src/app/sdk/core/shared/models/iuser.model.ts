import { Role } from './role.model';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    roles: Role[];
    token: string;
    expires: Date;
    rowId: number;
}
