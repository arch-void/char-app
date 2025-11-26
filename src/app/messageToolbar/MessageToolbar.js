"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import MessageForm from "./MessageForm"
import { useMutation } from "react-query"
import { useQueryClient } from "react-query"
import MessagesApi from "../../api/MessagesApi"
import { apiBaseURL } from "@/api/axios"
import CharsApi from "../../api/CharsApi"

const MessageToolbar = ({ apiURL, ...props }) => {

	const [isGenerating, setIsGenerating] = useState(false)
	const queryClient = useQueryClient()

	const currentApiURL = apiURL || apiBaseURL

	const onSubmit = async (userMessage) => {
		try {
			if (userMessage) {
				MessagesApi.create(userMessage, 2, currentApiURL)
			}

			setIsGenerating(true)
			const charsToRespond = await CharsApi.getCharsToRespond(userMessage, currentApiURL)
			for (const [index, char] of charsToRespond.entries()) {
				console.log("-----char", index, char)
				const message = await MessagesApi.generate(userMessage, char.id, currentApiURL)
				queryClient.invalidateQueries(["conversation"])
				// generateAudio({
				// 	text: message.text,
				// 	orderIndex: audioCounter + index,
				// 	voice: message.char.voice,
				// })
			}

			setIsGenerating(false)

			// handleAudioNavigation(charsToRespond.length - 1)

			queryClient.invalidateQueries(["conversation"])
		} catch (error) {
			console.error("Error in onSubmit:", error)
			setIsGenerating(false)
		}
	}


	const { mutate: deleteAll } = useMutation(() => MessagesApi.deleteAll(currentApiURL), {
		onSuccess: () => {
			queryClient.invalidateQueries(["conversation"])
		},
		onError: (error) => {
			queryClient.invalidateQueries(["conversation"])
			console.error("Promise rejected:", error)
		},
	})


	return (
		<div className={`flex-col items-center ${props.className}`}>
			<div className="flex">
				<MessageForm isLoading={isGenerating} onSubmit={onSubmit} />
				<Button onClick={() => deleteAll()}>Delete all</Button>
			</div>

		</div>
	)
}

export default MessageToolbar
