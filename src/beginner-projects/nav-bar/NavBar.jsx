import { Transition } from "@headlessui/react";
import { Close, Home, Menu, Search, ShoppingBag, ThreePRounded } from "@mui/icons-material";
import React, { useState } from "react";


function MenuList({ menuList, navbarOpen }) {
    const [selected, setSelected] = useState(menuList[0])
    const handleClick = (e, i) => {
        e.preventDefault()
        setSelected(i)
    }
    console.log(selected);
    return (
        <ul className=" flex transition ease-in duration-200 flex-col lg:flex-row list-none lg:ml-auto">
            {
                menuList.map(listItem => <li className="nav-item" key={listItem.title}>
                    <a href="" onClick={(e) => handleClick(e, listItem)} className={"px-3 py-2 flex items-center   text-xs font-bold leading-snug text-white hover:opacity-75 hover:bg-gray-900 rounded " + (selected.title === listItem.title ? "bg-gray-900" : "")}>{listItem.icon}
                    <Transition
                    show={navbarOpen}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                        <span className={"lg:hidden px-2"}>{listItem.title}</span>
                    </Transition>       
                    </a>
                </li>)
            }
        </ul>
    )
}


function MyNavBar({ fixed }) {
    const menuList = [{
        title: "Home",
        selected: true,
        icon: <Home />,
    },
    {
        title: "Search",
        selected: false,
        icon: <Search />,
    },
    {
        title: "Shopping Bag",
        selected: false,
        icon: <ShoppingBag />,
    },
    ]
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className="realtive flex flex-wrap items-center justify-between px-4 py-4 bg-gray-800 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a href="#" className="text-sm font-bold inline-block mr-3 py-2 whitespace-nowrap text-white">
                        CodeOnTheFly
                    </a>
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className="  ease in duration-150 hover:bg-white bg-gray-700 rounded-md lg:hidden hover:text-black text-white  py-1 px-3  ">
                        {navbarOpen ? <Close className=" ease in duration-150" /> : <Menu className=" ease in duration-150" />}
                    </button>
                </div>
                
                    <div className={"lg:flex  flex-grow flex-start  " + (navbarOpen ? "flex" : "hidden")} id="example-nav-danger">
                        <MenuList menuList={menuList} navbarOpen={navbarOpen}/>
                    </div>
               
            </div>
        </nav>
    )
}


export default MyNavBar