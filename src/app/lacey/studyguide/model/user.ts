export class Filter {
    columnName: string;
    filter: string;
}

export class Sort {
    sortColumn: string;
    sortDirection: number;
}

export class Pagination {
    start: number;
    totalresults: number;
    count: number;
}

/*export interface User {
    rowId: number;
    name: string;
    price: number;
}*/

export class User {
    rowId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    msid: number;
    email: string;
    active: boolean;
    userAdded: string;
    dateAdded: string;
    userEdited: string;
    dateEdited: string;
    role: string;
    segments: any[];
    payer: string;
    team: string;
    errorMessage: string;
}// User

export class UserRequest {
    filters: Filter[];
    sort: Sort;
    pagination: Pagination;

    constructor() {
        this.filters = new Array<Filter>();
        this.sort = new Sort();
        this.pagination = new Pagination();

    }
}

export class UserResponse {
    pagination: Pagination;
    users: User[];

    constructor(users, pagination) {
        this.users = users;
        this.pagination = pagination;
    }
}

/*export class PickLists {

    sourceList: any[];
    targetList: any[];
}*/

