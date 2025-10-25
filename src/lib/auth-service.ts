import axiosInstance from "./axios-config";

export async function login(email: string, password: string){
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
}

