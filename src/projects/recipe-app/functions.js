import axios from "axios"

const url = import.meta.env.VITE_URL_LIST
const ssearch = import.meta.env.VITE_URL_SEARCH
const key = import.meta.env.VITE_KEY
const host = import.meta.env.VITE_HOST

export async function list (number) {
    console.log("start of requesting");
    const options = {
        method: 'GET',
        url: url,
        params: { limit: `${number}`, start: '0' },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    console.log("requesting");
    const data = await axios.request(options).catch((e)=>{
        console.log(e);
    })
    const filtered = data.hits
    return filtered
   
}


export async function search(p){
    console.log("start of requesting");
    const options = {
        method: 'GET',
        url: ssearch,
        params: {q: p,},
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    console.log("requesting");
    const data = await axios.request(options).catch((e)=>{
        console.log(e);
    })
    console.log(data.data.hits);
    const filtered = data.data.hits
    return filtered
    
    
}