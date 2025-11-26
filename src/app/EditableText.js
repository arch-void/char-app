"use client"

import { useState } from "react"
import AutoResizeTextarea from "./AutoResizeTextArea"
import { sanitizeText } from "./chatUtils"

const EditableText = ({ text, onBlur, ...props }) => {
	const [isEditing, setIsEditing] = useState(false)

	const handleClick = () => {
		setIsEditing(true)
	}

	const handleBlur = (event) => {
		setIsEditing(false)
		onBlur(event)
	}

	const sanitizedText = sanitizeText(text)

	const getText = () => {
		return isEditing ? (
			// return true ? (
			<AutoResizeTextarea
				{...props}
				defaultValue={text}
				width='100%'
				onBlur={handleBlur}
				autoFocus
			></AutoResizeTextarea>
		) : (
			// <div className='whitespace-pre-wrap leading-[1.38rem]' padding='0.5rem 1rem' border='1px solid transparent'>
			<div className='whitespace-pre-wrap leading-[1.5rem] py-2 px-3 border border-transparent text-base'>
				{sanitizedText}
			</div>
		)
	}

	return (
		<div className="w-full" onClick={handleClick}>
			{getText()}
		</div>
	)
}

export default EditableText
