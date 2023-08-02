import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./i18n.js"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { sleep } from './utils/sleep.ts'
import Splash from './pages/Splash/Splash.tsx'
// import App from './App.tsx'
const App = lazy(async () => {
  await sleep(5000)
  return import("./App.tsx")
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
