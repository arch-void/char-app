import axios, { apiBaseURL } from "./axios"

export default class MessagesApi {

	static generate = (text, char) => {
		return axios.post(`${apiBaseURL}/conversations/messages/generate/`, {
			text,
			char,
		})
	}

	static create = (text, charId) => {
		return axios.post(`${apiBaseURL}/conversations/messages/`, {
			text,
			char: charId,
		})
	}

	static getConversation = (sessionId) => {
		return axios.get(`${apiBaseURL}/conversations/messages/`, { params: { "session_id": sessionId } })
	}

	static delete = (messageId) => {
		return axios.delete(`${apiBaseURL}/conversations/messages/${messageId}/`)
	}

	static deleteAll = () => {
		return axios.delete(`${apiBaseURL}/conversations/messages/delete-all/`)
	}

	static patch = (messageId, newText) => {
		const updateData = { text_content: newText }
		return axios.patch(`${apiBaseURL}/conversations/${messageId}/`, updateData)
	}

}


