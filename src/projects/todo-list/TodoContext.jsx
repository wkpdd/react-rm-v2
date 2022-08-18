import React, {useContext} from "react";
import TodoClass from "./todoClass.jsx";

export const addItem = (item)=>{
    console.log(item)
    let listOfItems = JSON.parse(window.localStorage.getItem("data"))??[]
    window.localStorage.removeItem("data")
    window.localStorage.setItem("data", JSON.stringify([...listOfItems,item]))
    return JSON.parse(window.localStorage.getItem("data"))
}


export const deleteItem = (item)=>{
    let listOfItems = JSON.parse(window.localStorage.getItem("data"))??[]
    console.log(item.id)
    listOfItems.splice(item.id,1)
    let index = 0
    listOfItems.forEach(item=>{
        item.id = index
        index++
    })
    window.localStorage.removeItem("data")
    window.localStorage.setItem("data", JSON.stringify(listOfItems))
    return JSON.parse(window.localStorage.getItem("data"))
}



export const updateItem = (item)=>{
    item.status = !item.status
    let listOfItems = JSON.parse(window.localStorage.getItem("data"))??[]
    listOfItems[item.id] = item
    window.localStorage.removeItem("data")
    window.localStorage.setItem("data", JSON.stringify(listOfItems))
    return item
}