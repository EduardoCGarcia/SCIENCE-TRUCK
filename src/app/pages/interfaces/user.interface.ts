export type Roles = 'SUSCRIPTOR' | 'ADMIN';



export interface User{
    userName: string;
    password: string;
}

export interface UserResponse{
    message:string;
    token:string;
    userId:number;
    role: Roles;
}