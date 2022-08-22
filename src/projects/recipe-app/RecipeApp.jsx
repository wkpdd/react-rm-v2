import { Search } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import 'dotenv/config'
// require('dotenv').config()



const Recipe = ({ item }) => {

    return (
        <div>
            {/* Recipe */}
            <div className="p-5 bg-red-400 rounded-md flex flex-col ">
                <img className="rounded-md object-cover w-full h-40 " src="https://avatars.hsoubcdn.com/71609dc24c1080d3b446421c0631ca10?s=512" alt="" />
                {/* title */}
                <div className="text-3xl px-2 py-3"> Title </div>
                <div className="text-xl px-2"> Sub-title </div>
                <div className="text-md text-justify p-1">Nam in ipsum posuere, fermentum justo sit amet, tristique risus. Mauris ultrices gravida laoreet. Donec consequat ligula sit amet risus laoreet egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus facilisis pulvinar dolor, id varius elit varius id. Pellentesque urna sem, posuere sit amet diam fringilla, volutpat efficitur est. Phasellus turpis libero, consectetur dictum ex vitae, lobortis tempor arcu. </div>
            </div>
        </div>
    )
}

export default function RecipeApp() {
    const yummy_url = process.env.YUMMLY_URL
    const key_header = process.env.KEY_HEADER
    const key = process.env.KEY
    const host_header = process.env.HOST_HEADER
    const host = process.env.HOST
    console.log([yummy_url, key, key_header, host, host_header]);
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    return (
        <div className="p-4 bg-gray-300 min-h-screen flex flex-col flex-grow   ">
            {/* Search */}
            <div className="flex flex-row items-center  justify-center">
                <input type="text" className="rounded-md mx-2 my-3 h-10 px-2 text-gray-700 w-3/4 xl:w-5/8" placeholder="Search" />
                <button className="ease in duration-200 p-2 h-10 mx-2 rounded-md bg-red-600 text-white hover:text-gray-900 hover:bg-red-400 flex flex-row px-5 justify-evenly"> Search  <Search className="mx-1" /></button>
            </div>
            {/* Content */}
            <div className="bg-white rounded-md p-3 w-ful  items-center ">
                {
                    isLoading ?
                        <div className=" w-ful flex flex-col m-auto items-center justify-center">
                            <CircularProgress fontSize="50" color="error" />
                            <div className="p-10 text-gray-700 text-xl">Loading Info</div>
                        </div> :
                        <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />

                        </div>
                }
            </div>
        </div>
    )
}