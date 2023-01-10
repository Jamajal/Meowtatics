import React, { useContext } from 'react';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

export default function Signin(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        
        if(!email || !password){
            setError('You need to fill all inputs!')
            return;
        };

        const isLogged = await auth.signin(email, password);
        
        if(isLogged)
            navigate('/');
    }

    return(
        <div className="flex flex-row">
            <div className="bg-signInBg bg-cover bg-no-repeat w-screen h-screen" />
            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-yellow-500 to-orange-500">
                <div className="bg-white p-8 rounded-xl w-3/4 flex flex-col justify-between items-center">
                    <h1 className="text-2xl text-center font-medium w-full">
                        Welcome catlover, enjoy your time in your catheaven :)
                    </h1>
                    <form className="mt-5 flex flex-col gap-2 w-full">
                        <input 
                            type="email" 
                            required 
                            autoFocus
                            placeholder="Email" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            required 
                            placeholder="Password" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <Link to='/' className="w-full">
                            <button 
                                className="w-full mt-2 py-2 bg-orange-300 text-white font-bold text-xl rounded hover:bg-orange-200"
                                onClick={handleSignIn}
                            >
                                Sign In
                            </button>
                        </Link>
                    </form>
                    <label className="mt-2 text-sm text-gray-600">Don't have an account? 
                        <Link to="/signup">
                            <span 
                                className="text-red-500 font-bold ml-1 cursor-pointer hover:text-red-400"
                            > Sign Up</span>
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    )
}