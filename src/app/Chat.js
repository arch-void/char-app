"use client"

import React, { useEffect, useState } from "react"

import MessagesApi from "../api/MessagesApi"
import MessageToolbar from "./messageToolbar/MessageToolbar"
import Conversation from "./Conversation"
import ApiURLForm from "./ApiURLForm"
import { useQuery, useQueryClient } from "react-query"
import { apiBaseURL } from "@/api/axios"


export const Chat = ({ env, session, phoneNumber, isChatLoading, ...props }) => {

	const [conversation, setConversation] = useState([])
	const [apiURL, setApiURL] = useState("http://127.0.0.1:8000")

	const currentApiURL = apiURL || apiBaseURL

	const queryClient = useQueryClient()

	const { data: conversationData, isLoading: isConversationLoading } = useQuery(
		["conversation"],
		() => MessagesApi.getConversation(session?._id, currentApiURL),
	)

	useEffect(() => {
		setConversation(conversationData)
	}, [conversationData])

	const deleteMessage = async (messageId) => {
		setConversation(conversation.filter((message) => message._id != messageId))
		await MessagesApi.delete(messageId, currentApiURL)
		queryClient.invalidateQueries(["conversation"])
	}

	if (isConversationLoading) {
		return <div>Loading...</div>
	}

	const handleSetApiURL = (url) => {
		setApiURL(url)
	}

	console.log("-----apiURL", apiURL)

	return (
		<div className="flex-col justify-between items-center h-full w-4/5"
			{...props}
		>
			<Conversation conversation={conversation} deleteMessage={deleteMessage} />
			<div className="flex justify-center w-full">
				<MessageToolbar className="m-6" env={env} session={session} phoneNumber={phoneNumber} isLoading={isChatLoading || isConversationLoading} apiURL={currentApiURL} />

			</div>
			<ApiURLForm setApiURL={handleSetApiURL} />
		</div>
	)
}

export default Chat
