import { Add, ArrowBack, ArrowBackIos, ArrowBackIosNewSharp, ArrowForwardIosSharp, Check, MilitaryTech, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export default function ShoppingList() {


    const [list, setList] = useState([])
    const [item, setItem] = useState("")
    const [total, setTotal] = useState(0)
    const handleClick = (e) => {
        const newItem = {
            item: item,
            qty: 1
        }
        setList([...list, newItem])
        setTotal(total+1)
        setItem("")
    }



    const Item = ({ item }) => {
        const [Checked, setChecked] = useState(false);
        const [qty, setQty] = useState(item.qty);
    
        const handleQty = (event, op, index) => {
            const nItems = [...list]
            if (op === '-' && qty > 0) {
               nItems[index].qty--;
               setTotal(total-1)
            } else if (op === '+') {
                nItems[index].qty++; 
                setTotal(total+1)
            }
            setList(nItems)
        }
    
        const handleCheck = (event) => {
            setChecked(!Checked)
        }
        return (
            <div className="bg-gray-200 p-2 rounded-md flex my-2 flex-row justify-between items-baseline">
                <div className=" flex flex-row items-baseline">
                    <button className={`rounded-3xl bg-white p-1 `} onClick={handleCheck}>
                        {
                            Checked ? <RadioButtonChecked /> : <RadioButtonUnchecked />
                        }
                    </button>
                    <div className={"px-3" + (Checked ? " line-through" : "")}> {item.item} </div>
                </div>
                <div className="flex flex-row">
                    <button onClick={e => handleQty(e, '-', list.indexOf(item))} className=" rounded-3xl mx-1 bg-white p-1"><ArrowBackIosNewSharp /></button>
                    <div className=" rounded-3xl mx-1 bg-white px-2 py-1 text-black text-xl">{qty}</div>
                    <button onClick={e => handleQty(e, "+", list.indexOf(item))} className=" rounded-3xl mx-1 bg-white p-1"><ArrowForwardIosSharp /></button>
    
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center min-h-screen">
            <div className="w-5/6 h-5/6 md:w-4/6 lg:w-3/4 xl:w-2/4 rounded-md bg-white p-3 flex flex-col ">
                <div className="px-3 flex flex-box justify-content">
                    <input type="text" onChange={(e) => setItem(e.target.value)} value={item} className="p-2 text-gray-800 w-full" placeholder="Add Item" />
                    <button className="p-2 focus:border-red-400 bg-gray-200 rounded-md mx-2 " onClick={handleClick}> <Add className="text-red-700 hover:bg-red-500 hover:text-white mx-2 rounded-md p-1" fontSize="large" /> </button>
                </div>
                {
                    list.length == 0 ? <div className=" p-10  items-center justify-center">

                    </div> : list.map(e => <li key={uuidv4()} className="list-none">
                        <Item item={e} />
                    </li>)
                }

                <div className=" justify-end">
                    {
                        "Total: " + total
                    }
                </div>
            </div>

        </div>
    )
}