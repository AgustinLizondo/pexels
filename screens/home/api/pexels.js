import axios from "axios";

export const getData = async (searchTerm) => {
    return axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: "563492ad6f9170000100000162f2c983c05f43028a7af67be591f9d1",
        }
    })
}