import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { weatherApi } from "./weather-api";


export default function WeatherApp() {

    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("adrar");
    const [feel, setFeel] = useState("");
    const [bg, setBg] = useState("cold");
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        const fetch = async ()=>{
            setIsLoading(true)
            console.log("calling");
            const data = await weatherApi({ location: city })
            const t = ((data.current_observation.condition.temperature - 25) * 5 / 9).toFixed()
            setBg(t>15? "hot":"cold") 
            setTemp(t)
            setCity(data.location.city)
            setFeel(data.current_observation.condition.text)
            setIsLoading(false)
        }
        fetch()
    }

    const handleChange = (e)=>{
        setCity(e.target.value)
    }
    return (
        <div className={`min-h-screen ease-in duration-300 bg-cover bg-${bg} items-center justify-center p-10 flex`}>
            <div className="w-5/6 md:w-3/4 lg:w-2/4 xl:w-2/6 h-5/6 bg-white rounded-md p-3 opacity-75">
                <div className={"flex flex-col justify-center" + isLoading ? " items-center" : "" }>
                    {
                        isLoading ? <CircularProgress /> : <>
                            <div className=" bg-white flex flex-grow">
                                <input type="text" onChange={handleChange} placeholder="Adrar" className="p-2 m-1 flex-grow border rounded-md" />
                                <button onClick={handleClick} className=" rounded-md bg-red-500 m-1 p-2 text-white font-bold "> Search </button>
                            </div>
                            <div className="rounded-md w-full text-center text-4xl m-3">{`${city}`}</div>
                            <div className="rounded-md w-full text-center bg-white p-3 text-9xl"> {temp}॰C</div>
                            <div className="rounded-md w-full text-center text-4xl m-3 font-bold">{feel}</div></>
                    }
                </div>
            </div>
        </div>
    )
}