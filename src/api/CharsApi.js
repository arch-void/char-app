import axios, { apiBaseURL } from "./axios"

export default class CharsApi {
    // static getChars = () => {
    // 	return axios.get(`${apiBaseURL}/chars/chars/`)
    // }

    // static moveChar = (charId, locationId) => {
    // 	return axios.patch(`${apiBaseURL}/chars/chars/${charId}/`, { location: locationId })
    // }



    static getCharsToRespond = (text, apiURL = apiBaseURL) => {
        console.log("-----apiURL in CharsApi", apiURL)
        return axios.post(`${apiURL}/chars/chars/chars-to-respond/`, { text })
    }


}
