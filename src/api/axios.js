import axios from "axios"
import humps from "humps"

export const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const instance = axios.create()
instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.headers.patch["Content-Type"] = "application/json"
instance.defaults.headers.delete["Content-Type"] = "application/json"

instance.interceptors.request.use((request) => {
	// request.headers["Authorization"] = `Bearer ${envsApiToken[env]}`
	if (request.data && request.headers["Content-Type"] === "application/json") {
		request.data = JSON.stringify(humps.decamelizeKeys(request.data))
	}

	if (request.params) {
		request.params = humps.decamelizeKeys(request.params)
	}
	return request
})

instance.interceptors.response.use((response) => {
	if (response.data && response.headers["content-type"] === "application/json") {
		return humps.camelizeKeys(response.data)
	}

	return response.data
})

export default instance
