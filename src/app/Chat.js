"use client"

import React, { useEffect, useState } from "react"

import MessagesApi from "../api/MessagesApi"
import MessageToolbar from "./messageToolbar/MessageToolbar"
import Conversation from "./Conversation"
import { useQuery, useQueryClient } from "react-query"


export const Chat = ({ env, session, phoneNumber, isChatLoading, ...props }) => {

	const [conversation, setConversation] = useState([])

	const queryClient = useQueryClient()

	const { data: conversationData, isLoading: isConversationLoading } = useQuery(
		["conversation"],
		() => MessagesApi.getConversation(session?._id),
	)

	useEffect(() => {
		setConversation(conversationData)
	}, [conversationData])

	const deleteMessage = async (messageId) => {
		setConversation(conversation.filter((message) => message._id != messageId))
		await MessagesApi.delete(messageId)
		queryClient.invalidateQueries(["conversation"])
	}

	if (isConversationLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className="flex-col justify-between items-center h-full w-4/5"
			{...props}
		>
			<Conversation conversation={conversation} deleteMessage={deleteMessage} />
			<div className="flex justify-center w-full">
				<MessageToolbar className="m-6" env={env} session={session} phoneNumber={phoneNumber} isLoading={isChatLoading || isConversationLoading} />
			</div>
		</div>
	)
}

export default Chat
