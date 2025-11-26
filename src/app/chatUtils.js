
export const formatMessage = (message) => {
	// return string of tool calls
	if (message.tool_calls) {
		let string = "Function calls: "
		message.tool_calls.forEach((toolCall) => {
			// toolCall.function.name
			string += `function: ${toolCall.function.name} | args: ${toolCall.function.arguments}\n`

		})
		return string

	}

	return message.content || message.text_content
}

export const sanitizeText = (text) => {

	if (text) {
		const sanitized = text.replace(/System: O valor máximo que o usuário pode solicitar é: R\$ 2,995\.66 e o valor máximo da parcela é: R\$ 148\.67\./g, "")
		return sanitized
	}

	return text
}
