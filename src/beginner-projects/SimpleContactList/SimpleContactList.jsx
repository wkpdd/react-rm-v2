import React, {useEffect, useState} from "react";
import {HideSource, HideSourceSharp, RemoveRedEye} from "@mui/icons-material";
import {CircularProgress} from "@mui/material";
import {getRandomUsers} from "./fetch-contacts.jsx";


const Contact = ({contact})=>{
    const link = contact.avatar
    const [showNumber, setShowNumber] = useState(false)
    const handleView = ()=>setShowNumber(!showNumber)
    return (
        <div className={"w-full rounded-md my-2 p-2 flex flex-row bg-gray-100"}>
            <div className={" w-20 h-22  bg-gray-300 rounded-md flex flex-row "}>
                <img className={"rounded-md object-cover"} src={link} alt="contact"/>
            </div>
            <div className="flex flex-col  p-2 mx-2 rounded-md flex-grow ">
                <div className="text-xl"> {contact.first_name + " " + contact.last_name}</div>
                <div className={"text-sm text-gray-400"}><a href={`mailto:${contact.email}`}>{contact.email}</a> </div>
                <div className={" flex flex-row justify-between items-center "}>
                    <div className={"ease in duration-200 text-sm text-gray-600"}> {showNumber?`${contact.phone_number}`:<></>}</div>
                    <button onClick={handleView} className={"rounded bg-danger  text-xs text-red-500 hover:text-red-900 "}>{showNumber?<HideSourceSharp fontSize={"small"}/>:<RemoveRedEye fontSize={"small"}/>}</button>
                </div>
            </div>
        </div>
    )
}

const ListOfContact = ({list=[]})=>{
    return (
        <div className={"w-5/6 h-5/6 p-4 rounded-md no-scrollbar overflow-y-auto sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/6"}>
            {
                list.map(c=><li className={"list-none"} key={c.email}><Contact contact={c}/></li> )
            }
        </div>
    )
}

export default function ContactsList(){
    const [isLoading, setLoading] = useState(true)
    const [contacts,setContacts] = useState([])
    useEffect(  ()=>{
        async function fetchContacts (){
            const cs = await getRandomUsers(7)
            console.log(cs)
            setContacts([...cs])
            setLoading(false)
        }
        fetchContacts().then(()=>{})
    },[])
    return (
        <div className={"h-screen bg-gradient-to-r from-purple-700 to-pink-700 flex flex-col items-center justify-center p-10"}>
            <div className={"text-3xl text-white font-bold p-3"}>List of Contacts</div>
            {
                isLoading? <CircularProgress className={"text-white"}/>:<ListOfContact list={contacts}/>
            }
        </div>
    )
}