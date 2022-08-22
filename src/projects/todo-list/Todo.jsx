import React, {useContext, useEffect, useState} from "react";
import TodoClass from './todoClass.jsx'
import {
    Check,
    CheckCircle,
    Clear,
    Delete,
    SortSharp
} from "@mui/icons-material";
import {addItem, deleteItem, updateItem} from "./TodoContext.jsx";




export default function TodoList() {

    const [showMenu, setShowMenu] = useState(false)
    const [isLoading, setIsloading] = useState(false);
    let o = JSON.parse(window.localStorage.getItem("data"))
    const [listOfItems, setListOfItems] = useState(o == null ? [] : o)
    const [newItem, setNewItem] = useState("")
    const handleAdd = (e) => {
        e.preventDefault()

        if (`${newItem}`.length === 0) return
        let item = new TodoClass(listOfItems.length, newItem, false)
        setListOfItems(addItem(item))
    }

    useEffect(() => {
        console.log("updated")
    }, [
        listOfItems
    ])

    const ListItem = ({item , update}) => {

        const [citem, setCitem] = useState(item)

        const handleUpdate = ()=>{
            console.log("rani hna")
            item.status = !item.status
            let items  = listOfItems
            items[item.id] = item
            const f =[...items]
            setListOfItems(f)
        }
        return (
            <div
                className={"w-100 justify-between p-2 m-2 bg-white  text-gray-800 font-bold flex flex-row block rounded align-baseline"}>
                <div className={(citem.status ? "line-through text-gray-400 " : " ") + "p-2"}>{citem.title}</div>
                <div>
                    <button
                        onClick={handleUpdate}
                        className={" ease in duration-200 p-2 text-green-400  hover:text-green-50 mx-2 rounded bg-green-50 hover:bg-green-400"}>
                        <CheckCircle className={"font-bold "}/>
                    </button>
                    <button
                        onClick={() => {

                            const f = deleteItem(item)
                            setListOfItems(f)
                        }}
                        className={"ease in duration-200 p-2 mx-2 text-red-400 hover:text-red-50 rounded bg-red-50 hover:bg-red-400 "}>
                        <Delete className={" font-bold "}/>
                    </button>
                </div>
            </div>
        )
    }

    const ListOfItems = ({items = [], update}) => {
        return (


            <ul className={"overflow-y-scroll scroll-mb-11 m-3"}>
                {

                    items.map(item => <li key={item.id ?? 0}>{isLoading?<></>:<ListItem item={item}/>}</li>)
                }
            </ul>


        )
    }


    const Menu = () => {
        return (
            <div id={"dropdown"}
                 className={showMenu ? "" : "invisible" + "z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "}>
                <ul className={showMenu ? "visible p-3 bg-white rounded m-2 object-center" : "hidden"}
                    aria-labelledby="dropdownButton">
                    <li className={showMenu ? "visible" : "hidden"}>
                        <a href="#"
                           className={"block py-2 px-4 text-sm rounded text-gray-700 hover:bg-gray-200 hover:text-black"}>Dashboard</a>
                    </li>
                    <li className={showMenu ? "visible" : "hidden"}>
                        <a href="#"
                           className="block py-2 px-4 text-sm rounded text-gray-700 hover:bg-gray-200 hover:text-black">Settings</a>
                    </li>
                    <li className={showMenu ? "visible" : "hidden"}>
                        <a href="#"
                           className="block py-2 px-4 text-sm  rounded text-gray-700 hover:bg-gray-200 hover:text-black">Earnings</a>
                    </li>
                    <li className={showMenu ? "visible" : "hidden"}>
                        <a href="#"
                           className="block py-2 px-4 text-sm rounded text-gray-700 hover:bg-gray-200 hover:text-black">Sign
                            out</a>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div
            className=" px-20 py-20 w-full justify-center flex flex-col overflow-y-scroll overscroll-none items-center h-screen bg-gradient-to-r from-blue-500 to-purple-800">
            <h1 className={"text-5xl text-white font-bold my-2 mt-1"}> Todo List </h1>
            <div className={"align-baseline     items-stretch flex flex-row m-auto"}>
                <input type="text" className={"p-2 mx-3 rounded bg-white"} value={newItem}
                       onChange={event => setNewItem(event.target.value)} placeholder={"Todo Item"}/>
                <button
                    onClick={event => handleAdd(event)}
                    className={" ease in duration-200 p-2 text-green-400  hover:text-green-50 mx-2 rounded bg-green-50 hover:bg-green-400"}>
                    <Check className={"font-bold "}/>
                </button>
                <button
                    onClick={()=>setNewItem("")}


                    className={"ease in duration-200 p-2 mx-2 text-red-400 hover:text-red-50 rounded bg-red-50 hover:bg-red-400 "}>
                    <Clear className={" font-bold "}/>
                </button>
                {/*<div>*/}
                {/*    <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setShowMenu(!showMenu)}*/}
                {/*            className="text-gray-800 bg-white hover:bg-gray-300 font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center "*/}
                {/*            type="button">*/}
                {/*        <div className={"mx-3"}>Filter</div>*/}
                {/*        <SortSharp className={"mx-3"}/></button>*/}
                {/*    /!*<Menu/>*!/*/}
                {/*</div>*/}
            </div>
            {/*{!isLoading ? (*/}
                <ListOfItems items={listOfItems} update={setIsloading}/>
            {/*// ):<></>}*/}


            <button className={"p-3 text-red-500 bg-white rounded "}
                    onClick={() => window.localStorage.removeItem("data")}> Delete
            </button>
            {/*<div>*/}
            {/*    {*/}
            {/*        window.localStorage.getItem("data")??"dd"*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}