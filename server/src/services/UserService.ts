import UserRepo from '../db/models/UserRepo';
import { User } from '../models/User';

export class UserService {
    async getAllUsers(): Promise<User[]> {
        const doc = await UserRepo.find().populate('User').exec();
        return doc as User[];
    }

    async createUser(): Promise<User> {
        const newUser = new UserRepo({
            _id: 1,
            firstname: 'firstname',
            lastname: 'lastname',
            email: 'email@mail.com',
        });
        const user = await newUser.save();
        return user as unknown as User;
    }

    async getUser(id): Promise<User> {
        const doc = await UserRepo.find({ _id: id }).populate('User').exec();
        return doc[0] as User;
    }
}
