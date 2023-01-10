import React, { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ( { children }: { children: JSX.Element }) => {
    const [ user, setUser ] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageDataToken = localStorage.getItem('authToken');
            
            if(storageDataToken){
                const data = await api.validateToken(storageDataToken);
                if(data.user)
                    setUser(data.user);
            }
        }
        validateToken();
    }, [api])

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        
        if(data.user){
            setUser(data.user);
            setToken(data.accessToken);
            return true;
        }

            return false;
    };

    const signout = () => {
        setUser(null);
        setToken('');
    };

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}