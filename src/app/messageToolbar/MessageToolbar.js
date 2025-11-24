"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import MessageForm from "./MessageForm"
import { useMutation } from "react-query"
import { useQueryClient } from "react-query"
import MessagesApi from "../../api/MessagesApi"

const MessageToolbar = ({ env, session, phoneNumber, ...props }) => {

	const [isGenerating, setIsGenerating] = useState(false)
	const queryClient = useQueryClient()

	const onSubmit = async (userMessage) => {

		if (userMessage) {
			MessagesApi.create(userMessage, 2)
		}

		setIsGenerating(true)
		// const charsToRespond = await CharsApi.getCharsToRespond(userMessage, locationId)
		const charsToRespond = [{ id: 1 }]

		for (const [index, char] of charsToRespond.entries()) {
			console.log("-----char", index, char)
			const message = await MessagesApi.generate(userMessage, char.id)
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
	}


	const { mutate: deleteAll } = useMutation(() => MessagesApi.deleteAll(), {
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
