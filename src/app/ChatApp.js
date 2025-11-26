"use client"

import React, { useState } from "react"
import { useQuery } from "react-query"
import Chat from "./Chat"

export const App = () => {
	const [env, setEnv] = useState("local")

	const handleSelectNumber = (value) => {
		setPhoneNumber(value)
	}

	const handleSelectEnv = (value) => {
		setEnv(value)
	}


	return (
		<div className="flex">
			<div className="flex justify-center w-full" height='100vh' >
				<Chat className='w-4/5' env={env} />
			</div>
		</div >
	)
}

export default App
