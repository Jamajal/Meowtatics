import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

import Signin from '../../pages/SignIn';


export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);
    
    return auth.user ? children : <Signin />;
};