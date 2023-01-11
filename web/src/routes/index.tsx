import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/SignIn';
import Signup from '../pages/Signup';

function Private({ Item }:{Item: React.FunctionComponent}){
    const signed = false;

    return signed ? <Item /> : <Signin />    
};

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>                
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Private Item={Home} />} />
            </Routes>
        </BrowserRouter>
    )
}

