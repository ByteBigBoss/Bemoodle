type UserDTO = {
    display_name: string;
    username: string;
    email: string;
    password: string;
}

type VerifyDTO = {
    verification:string;
}

type SignInDTO = {
    username: string;
    email: string;
    password: string;
};

type UserStatus = {
    id: number;
    name: string;
};

type User = {
    id: number;
    username: string;
    display_name: string;
    email: string;
    password: string;
    verification: string;
    created_at: string;
    userStatus: UserStatus;
};

type ArtisanStatus = {
    id: number;
    name: string;
};

type Artisan = {
    id: number;
    user: User;
    artisanStatus: ArtisanStatus;
    created_at: string;
    updated_at: string;
};
