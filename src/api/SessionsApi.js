import axios, { apiBaseURL } from "./axios"

export default class SessionsApi {
	static getSession = (userId) => {
		return axios.get(`${apiBaseURL}/session-by-user-id`, { params: { userId } })
	}

	static deleteMessages = (sessionId) => {
		return axios.delete(`${apiBaseURL}/sessions/${sessionId}/messages`)
	}

}