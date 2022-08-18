import React, {useState} from "react";

export default function Calculator(){

    const [op, setOp] = useState("")
    const [fn,setFn] = useState("")
    const [sn,setSn] = useState("")
    const [res, setRes] = useState(0)
    const handleNumber = (event)=>{
        const n = event.target.innerText
        if(op === "") {
            setFn(fn + n)
            setRes(parseFloat(fn+n))
        }
        else {
            setSn(sn + n)
            setRes(parseFloat(sn+n))
        }
        console.table([fn,sn])
    }
    const handleOperation = (event)=>{
        const o = event.target.innerText
        setOp(o)
        console.log(op)
    }
    const handleEqual = ()=>{
        if(op==="") return
        let res = 0;
        try {
            switch (op){
                case "*":{
                    res = parseFloat(fn) * parseFloat(sn)
                }
                break
                case "/":{
                    res = parseFloat(fn) / parseFloat(sn)
                }
                break
                case "+":{
                    res = parseFloat(fn) + parseFloat(sn)
                }
                break
                case "-":{
                    res = parseFloat(fn) - parseFloat(sn)
                }
                    break
                default :{

                }
            }
            setRes(res)
            setOp("")
            setFn(`${res}`)
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div className={"justify-center   flex bg-gradient-to-r from-red-900 h-screen to-gray-900 items-center p-5"}>
            <div className={"w-5/6  shadow-2xl shadow-gray-700 sm:w-5/6  md:w-1/2 lg:w-1/3 xl:w-1/4 rounded  bg-gray-900"}>
                {/*Buttons*/}
                <div className={"flex flex-row-reverse my-1 p-3 align-baseline relative top-0 right-0"}>
                    <div className={"bg-red-600 rounded-lg  mx-1 p-2 hover:bg-red-800"}></div>
                    <div className={"bg-green-500 rounded-lg mx-1 p-2 hover:bg-green-700"}></div>
                    <div className={"bg-amber-400 rounded-lg mx-1 p-2 hover:bg-amber-700"}></div>
                </div>
                {/*Screen*/}
                <div className={"h-2/6 p-2 text-white text-5xl items-end flex flex-row-reverse"}>
                    {
                        res
                    }
                </div>
                {/*NumPad*/}
                <div className={" h-4/6 grid grid-col-4 rounded"}>
                    <div className={"flex flex-row w-full"}>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400 ">7</div>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400">8</div>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400">9</div>
                        <div onClick={handleOperation} className="p-4 w-full bg-amber-500 text-white font-bold hover:bg-amber-700">/</div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                        <div onClick={handleNumber} className="p-4  w-full bg-gray-200 text-gray-800 hover:bg-gray-400">4</div>
                        <div onClick={handleNumber} className="p-4  w-full bg-gray-200 text-gray-800 hover:bg-gray-400">5</div>
                        <div onClick={handleNumber} className="p-4  w-full bg-gray-200 text-gray-800 hover:bg-gray-400">6</div>
                        <div onClick={handleOperation} className="p-4  w-full bg-amber-500 text-white font-bold hover:bg-amber-700 " >*</div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400">1</div>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400">2</div>
                        <div onClick={handleNumber} className="p-4 w-full bg-gray-200 text-gray-800 hover:bg-gray-400">3</div>
                        <div onClick={handleOperation} className="p-4 w-full bg-amber-500 text-white font-bold hover:bg-amber-700">+</div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                        <div onClick={handleNumber} className="p-4 w-full justify-center items-center hover:bg-gray-400 align-middle bg-gray-200 text-gray-800 rounded-bl">.</div>
                        <div onClick={handleNumber} className="p-4 w-full  bg-gray-200 text-gray-800 hover:bg-gray-400">0</div>
                        <div onClick={handleEqual} className="p-4 w-full flex bg-gray-200 text-gray-800 hover:bg-gray-400">=</div>
                        <div onClick={handleOperation} className="p-4 w-full bg-amber-500 text-white font-bold hover:bg-amber-700 rounded-br">-</div>
                    </div>
                </div>

            </div>
        </div>
    )
}