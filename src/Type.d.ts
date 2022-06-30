export interface UserType {
    id: number;
    profilePicture: string;
    username: string;
}

export interface PostType {
    id: number;
    desc: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
}

export interface MongoUserType {
    _id: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    coverPicture?: string;
    folllowes: string[];
    folllowings: string[];
    isAdmin: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    __v: number | null;
}
