import axios, { apiBaseURL } from "./axios"

export default class UsersApi {
	// static getChars = () => {
	// 	return axios.get(`${apiBaseURL}/chars/chars/`)
	// }

	// static moveChar = (charId, locationId) => {
	// 	return axios.patch(`${apiBaseURL}/chars/chars/${charId}/`, { location: locationId })
	// }

	// static getCharsToRespond = (text, locationId) => {
	// 	return axios.post(`${apiBaseURL}/chars/chars/chars-to-respond/`, { location: locationId, text })
	// }

	static getUser = (phone) => {
		return axios.get(`${apiBaseURL}/user-by-phone/`, { params: { phone } })
	}

}
