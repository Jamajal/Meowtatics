import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from '../contexts/Auth/RequireAuth'
import Home from '../pages/Home';
import Signin from '../pages/SignIn';
import Signup from '../pages/Signup';

export default function AppRoutes(){
    return(
        <Routes>                
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

