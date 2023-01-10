import axios from "axios";
import { User } from "../types/User";
import { Cat } from "../types/Cat";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const useApi = () => ({
    validateToken: async (accessToken: string) => {
        const user: User = await api.post('/api/users/validateToken', { accessToken });

        return {
            accessToken,
            user
        }
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/api/users/login', { email, password });

        return response.data;
    },

    signup: async (name: string, email: string, password: string) => {
        const response = await api.post('/api/users', {name, email, password});

        return response.data;
    },

    loadCats: async () => {
        const response = await api.get('/api/cats');

        return response.data;
    }
})