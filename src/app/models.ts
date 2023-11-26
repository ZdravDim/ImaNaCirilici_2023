export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    jwt: string;
    refreshToken: string;
    admin: boolean;
}

export interface RegisterRequest {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface RegisterResponse {
    username: string;
    firstName: string;
    lastName: string;
}