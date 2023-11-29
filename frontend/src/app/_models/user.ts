export class User {
    id?: number;
    name?: string
    phone?: string
    email?: string;
    password?: string;
    role?: string;
    token?: string;
}

export class GetNgoDTO {
    name?: string;
    email?: string;
    phoneNumber?: string;
}