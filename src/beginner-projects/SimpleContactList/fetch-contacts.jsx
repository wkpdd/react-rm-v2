import axios from "axios";

export async function getRandomUsers(num=10) {
    try {
        const data = await axios.get(`https://random-data-api.com/api/users/random_user?size=${num}`);
        console.log(data)
        return data.data;
    } catch(err) {
        console.log("error: ", err);
    }
}