import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import "@fontsource-variable/onest";
import Router from './Router';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <Router />
     <ReactQueryDevtools />
     <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
