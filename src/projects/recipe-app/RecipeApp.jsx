import { Search } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import {list , search} from './functions'
import { v4 as uuidv4 } from 'uuid';
// require('dotenv').config()



const Recipe = ({ item }) => {
   
    return (
        <div>
            {/* Recipe */}
            <div className="p-5 bg-gradient-to-r from-red-900 to-red-700 rounded-md flex flex-col ">
                <img className="rounded-md object-cover w-full h-40 " src={item.recipe.image} alt="" />
                {/* title */}
                <div className="text-3xl px-2 py-3 text-white"> {item.recipe.label} </div>
                <div className="px-2 text-gray-100 "> {item.recipe.cuisineType} </div>
                <div className="text-xl px-2 text-white"> { item.recipe.mealType} </div> 
                {
                   item.recipe.ingredients.map(
                        i => <li className="list-none p-2 my-1 bg-red-600 rounded-md">
                            <div className="flex flex-col">          
                                <div className="text-white text-sm">
                                    {`${i.text}`.toUpperCase()}
                                </div>           
                                <div className="text-white text-sm">
                                    {`${i.weight} gram //  ${i.foodCategory}`}
                                </div>                            
                            </div>
                        </li>
                   )
                }
                {/* <div className="text-md text-justify p-1 text-gray-200">Nam in ipsum posuere, fermentum justo sit amet, tristique risus. Mauris ultrices gravida laoreet. Donec consequat ligula sit amet risus laoreet egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus facilisis pulvinar dolor, id varius elit varius id. Pellentesque urna sem, posuere sit amet diam fringilla, volutpat efficitur est. Phasellus turpis libero, consectetur dictum ex vitae, lobortis tempor arcu. </div> */}
            </div>
        </div>
    )
}

export default function RecipeApp() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [recipes, setRecipes] = useState([])
    const [quesry, setQuesry] = useState('');
    useEffect(() => {
        setIsLoading(true)
        async function ssearch(){
            const data = await search("fish")
            setRecipes([...data])
        }
        ssearch()
        setIsLoading(false)
    }, []);
    const handlequery = (event)=>{        
        setQuesry(event.target.value)
    }

    const handleClick = (event)=>{
        event.preventDefault()
        setIsLoading(true)
        async function ssearch(){
            const data = await search(quesry)
            setRecipes([...data])
        }
        ssearch()
        setIsLoading(false)
    }

    return (
        <div className="p-4 bg-gray-300 min-h-screen flex flex-col flex-grow   ">
            {/* Search */}
            <div className="flex flex-row items-center  justify-center">
                <input type="text" value={quesry} onChange={handlequery} className="rounded-md mx-2 my-3 h-10 px-2 text-gray-700 w-3/4 xl:w-5/8" placeholder="Search" />
                <button onClick={handleClick} className="ease in duration-200 p-2 h-10 mx-2 rounded-md bg-red-600 text-white hover:text-gray-900 hover:bg-red-400 flex flex-row px-5 justify-evenly"> Search  <Search className="mx-1" /></button>
            </div>
            {/* Content */}
            <div className="bg-white rounded-md p-3 w-ful  items-center ">
                {
                    isLoading ?
                        <div className=" w-ful flex flex-col m-auto items-center justify-center">
                            <CircularProgress fontSize="50" color="error" />
                            <div className="p-10 text-gray-700 text-xl">Loading Info</div>
                        </div> :
                        <div className=" grid grid-flow-row-dense grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
                            {
                                recipes?.map(recipe=> {

                                    return <li className="list-none" key={uuidv4()}><Recipe item={recipe}/></li>
                                })
                            }

                        </div>
                }
            </div>
        </div>
    )
}