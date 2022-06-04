export type Roles = 'SUSCRIPTOR' | 'ADMIN';


export interface User {
    //id: number,
    //name: string,
    email: string,
    password: string
}


export interface UserResponse extends User{
    dataUser: {
        //id: number,
        name: string
        accessToken: string,
        expiresIn: string,
        userId: number;
        role: Roles;
    }
}
