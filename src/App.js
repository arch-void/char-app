// import React, { useState } from "react"
// import ChatApp from "./chat/ChatApp"
// import { QueryClient, QueryClientProvider } from "react-query"
// import { ChakraProvider } from "@/components"
// import { Route, Routes } from "react-router-dom"

// function App() {
// 	const [queryClient] = useState(
// 		() =>
// 			new QueryClient({
// 				defaultOptions: {
// 					queries: {
// 						refetchOnWindowFocus: false,
// 						refetchOnReconnect: false,
// 						retry: (failureCount, error) => {
// 							if (error?.response?.status >= 400 && error?.response?.status < 500) return false
// 							return failureCount < 2
// 						},
// 					},
// 				},
// 			}),
// 	)
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<ChakraProvider>
// 				<div className='App'>
// 					<Routes>
// 						<Route Component={ChatApp} path='/' />
// 					</Routes>
// 				</div>
// 			</ChakraProvider>
// 		</QueryClientProvider>
// 	)
// }

// export default App
