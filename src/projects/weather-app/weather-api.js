import axios from "axios"


export  async function weatherApi (params) {
    console.log("Calling");
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: { location: params.location, format: 'json', u: 'f' },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_KEY,
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    const res = await axios.request(options).catch(function (error) {
        console.error(error);
    });

    console.log(res.data);
    return res.data
}
