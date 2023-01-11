import { useEffect, useState } from 'react';
import CatCard from '../components/CatCard';
import { api } from '../lib/axios';

interface CatProps {
    name: String,
    job: String,
    phone: String,
    hearts: Number,
    cool: Number,
    cutie: Number
}

export default function Home(){
    const [ cats, setCats ] = useState([]);

    const getCats = async () => {
            await api.get('/api/cats')
            .then(response => {
                setCats(response.data)   
            });
    }

    useEffect(() => {
        getCats();
    },[])

    return(
        <div>
            <div className="bg-homeLayer bg-cover bg-no-repeat bg-center h-56"></div>
            <div className=" w-screen p-10 flex flex-col items-center">
                <div className="w-full">
                    <input 
                        type="text" 
                        placeholder="Type a cat name..." 
                        className="px-2 py-1 w-1/5 mr-1 text-base font-light rounded bg-orange-100"
                    />
                    <button className="px-4 py-1 text-base font-medium text-white rounded bg-orange-150"
                        onClick={() => {
                            console.log(cats)
                        }}
                    >Filtrar</button>
                </div>
                    <div className="w-full h-screen mt-3 p-5 border-2 border-solid border-black rounded-3xl">
                        <ul className="w-full h-full grid grid-cols-5 gap-6 overflow-auto">
                            {
                                cats.map((cat: CatProps, index) => {
                                    return(
                                        <li key={index}>
                                            <CatCard
                                                name={cat.name}
                                                job={cat.job}
                                                phone={cat.phone}
                                                loved={cat.hearts}
                                                cool={cat.cool}
                                                cutie={cat.cutie}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            </div>
        </div>
    )
}