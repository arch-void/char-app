"use client"

import React, { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import EditableText from "./EditableText"
import MessagesApi from "../api/MessagesApi"
import { useQueryClient } from "react-query"
export const slugify = (text) => {
	if (!text) return ""

	return text.toLowerCase().replace(/[- ]/g, "_")
}

const PUBLIC_FOLDER_PATH = process.env.PUBLIC_URL

export const MessageElement = ({ messageId, charName, text, deleteMessage }) => {
	const [inputText, setInputText] = useState(text)

	const [disabled, setDisabled] = useState(false)

	const queryClient = useQueryClient()

	const handleEditBlur = async (event) => {
		const newText = event.target.value
		if (inputText == newText) {
			return
		}

		setInputText(newText)
		await MessagesApi.patch(messageId, newText)

		queryClient.invalidateQueries(["conversation"])
	}

	const onFocus = (event) => {
		setInputText(event.target.value)
	}

	const handleDeleteClick = () => {
		setDisabled(true)
		deleteMessage(messageId)
	}

	return (
		<div className='flex'>
			<Avatar
				visibility='hidden'
				src={`${PUBLIC_FOLDER_PATH}/avatars/${slugify(charName)}.png`}
				m='0.2rem'
				size='sm'
			/>
			<div className="pt-[0.51rem] w-20">{`${charName}:`}</div>
			<div className="w-full">
				<EditableText className="w-full" text={inputText} onFocus={onFocus} onBlur={handleEditBlur}></EditableText>
			</div>
			{/* <Button enabled={disabled} onClick={handleDeleteClick} > X</Button> */}
			<Button disabled={disabled} onClick={handleDeleteClick} > X</Button>
		</div >
	)
}

export default MessageElement
