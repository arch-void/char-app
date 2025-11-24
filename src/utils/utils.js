import humps from "humps"

export const slugify = (text) => {
	if (!text) return ""

	return text.toLowerCase().replace(/[- ]/g, "_")
}

export const parseJsonObjects = (text) => {
	const regex = /{[^}]*}/g
	const matches = text.match(regex)

	const jsonObjects = matches.reduce((acc, curr) => {
		try {
			const parsed = JSON.parse(curr)
			const camelized = humps.camelizeKeys(parsed)
			return [...acc, camelized]
		} catch (e) {
			return acc
		}
	}, [])
	return jsonObjects
}

export const parseJsonObject = (text) => {
	const regex = /{[^}]*}/g
	const match = text.match(regex)

	try {
		const parsed = JSON.parse(match)
		const camelized = humps.camelizeKeys(parsed)
		return camelized
	} catch (e) {
		return {}
	}
}

export const getAbbreviation = (text) => {
	return text
		.split(" ") // Split sentence into words
		.map((word) => word[0]) // Get the first letter of each word
		.join("")
}

export const getEnv = (url) => {
	if (url.includes("localhost")) {
		return "local"
	} else if (url.includes("qatur")) {
		return "dev"
	} else if (url.includes("gey")) {
		return "prod"
	}
}