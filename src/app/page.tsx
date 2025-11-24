"use client"

import React, { useState } from "react"
import ChatApp from "./ChatApp"
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: (failureCount, error) => {
              if (error?.response?.status >= 400 && error?.response?.status < 500) return false
              return failureCount < 2
            },
          },
        },
      }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ChatApp />
      </ThemeProvider>



    </QueryClientProvider>
  )
}

export default App
