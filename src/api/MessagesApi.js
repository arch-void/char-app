import axios, { apiBaseURL } from "./axios"

export default class MessagesApi {

	static generate = (text, char, apiURL = apiBaseURL) => {

		return axios.post(`${apiURL}/conversations/messages/generate/`, {
			text,
			char
		})
	}

	static create = (text, charId, apiURL = apiBaseURL) => {

		return axios.post(`${apiURL}/conversations/messages/`, {
			text,
			char: charId
		})
	}

	static getConversation = (sessionId, apiURL = apiBaseURL) => {
		return axios.get(`${apiURL}/conversations/messages/`, { params: { "session_id": sessionId } })
	}

	static delete = (messageId, apiURL = apiBaseURL) => {
		return axios.delete(`${apiURL}/conversations/messages/${messageId}/`)
	}

	static deleteAll = (apiURL = apiBaseURL) => {
		return axios.delete(`${apiURL}/conversations/messages/delete-all/`)
	}

	static patch = (messageId, newText, apiURL = apiBaseURL) => {
		const updateData = { text_content: newText }
		return axios.patch(`${apiURL}/conversations/${messageId}/`, updateData)
	}

}


