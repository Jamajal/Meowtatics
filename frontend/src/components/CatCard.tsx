import catImage from '../assets/cat.png';
import coolEmoji from '../assets/coolEmoji.png';
import loveEmoji from '../assets/loveEmoji.png';
import smilingEmoji from '../assets/smilingEmoji.png';

interface CatCardProps {
    name: String,
    job: String,
    phone: String,
    loved: Number,
    cutie: Number,
    cool: Number
}

export default function CatCard(props: CatCardProps){
    return(
        <div className="max-w-xs">
            <div className="p-3 flex flex-col items-center overflow-hidden bg-gray-700 text-white">
                <img src={catImage} alt="Photo of an example cat" />
                <h1 className="font-bold mt-2">{props.name}</h1>
                <p>{props.job}</p>
                <p>{props.phone}</p>
                <div className="flex mt-1 gap-2">
                    <div className="flex gap-1">
                        <img src={loveEmoji} alt="" />
                        <label>{String(props.loved)}</label>
                    </div>
                    <div className="flex  gap-1">
                        <img src={coolEmoji} alt="" />
                        <label>{String(props.cool)}</label>
                    </div>
                    <div className="flex  gap-1">
                        <img src={smilingEmoji} alt="" />
                        <label>{String(props.cutie)}</label>
                    </div>
                </div>
            </div>
            <div className="flex">
                <button className="w-full py-1 font-bold text-white bg-red-500">Loved</button>
                <button className="w-full py-1 font-bold text-white bg-orange-300">Cool</button>
                <button className="w-full py-1 font-bold text-white bg-pink-500">Cutie</button>
            </div>
        </div>
    )
}