import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/axios";

export default function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();

        if(!name || !email || !password || !confirmPassword){
            setError('You need to fill all inputs!')
            return;
        }

        else if(!email.includes('@')){
            setError('Invalid email!');
            return;
        }

        else if(password != confirmPassword){
            setError("Password inputs don't match");
            return;
        }
        
        else if(password.length < 6){
            setError('Password weak! It must have at least 6 digits');
            return;
        }

        await api.post('/api/users', {
            name,
            email,
            password
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    return(
        <div className="flex flex-row">
            <div className="bg-signInBg bg-cover bg-no-repeat w-screen h-screen" />
            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-yellow-500 to-orange-500">
                <div className="bg-white p-8 rounded-xl w-3/4 flex flex-col justify-between items-center">
                    <h1 className="text-2xl text-center font-medium w-full">
                        Nice that you decide to join our cat community
                    </h1>
                    <form className="mt-5 flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            required 
                            autoFocus
                            placeholder="Username" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => {
                                setName(e.target.value);
                                setError('');
                            }}
                            value={name}
                        />
                        <input 
                            type="text" 
                            required                         
                            placeholder="Email" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                            value={email}
                        />
                        <input 
                            type="password" 
                            required                         
                            placeholder="Password" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => {
                                setPassword(e.target.value);
                                setError('');
                            }}
                            value={password}
                        />
                        <input 
                            type="password" 
                            required                         
                            placeholder="Confirm password" 
                            className="w-full bg-gray-100 px-3 py-1 rounded"
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                                setError('');
                            }}
                            value={confirmPassword}
                        />
                        <Link to='/signin' className="w-full">
                            <button 
                                className="w-full mt-2 py-2 bg-orange-300 text-white font-bold text-xl rounded hover:bg-orange-200"
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </button>
                        </Link>
                    </form>
                    <label className="text-sm mt-1 text-red-600">{error}</label>
                    <label className="mt-1 text-sm text-gray-600">Already have an account? 
                        <Link to="/signin" className="">
                            <span 
                                className="text-red-500 font-bold ml-1 cursor-pointer hover:text-red-400"
                            > Sign In</span>
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    )
}