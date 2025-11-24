import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MessageForm = ({ isLoading, onSubmit }) => {
	const { register, handleSubmit, reset } = useForm()

	const getMessageButton = () => {
		return isLoading ? (
			<Button>
				Stop
			</Button>
		) : (
			<Button type='submit'>
				Send
			</Button>
		)
	}

	const onMessageSubmit = async ({ userMessage }) => {
		reset()

		onSubmit(userMessage)
	}

	return (
		<form onSubmit={handleSubmit(onMessageSubmit)}>
			<div className="flex">
				<Input {...register("userMessage")} placeholder='Type your message' />
				{getMessageButton()}
			</div>
		</form>
	)
}

export default MessageForm
