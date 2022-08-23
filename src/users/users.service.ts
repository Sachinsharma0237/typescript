import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Sachin',
            username:'sachin',
            password:'Sachinn@123'
        },
        {
            id: 2,
            name: 'Steve',
            username:'steve',
            password:'Steve@123'
        },
        {
            id: 3,
            name: 'Jack',
            username:'jack',
            password:'Jack@123'
        },
    ];
    
    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
