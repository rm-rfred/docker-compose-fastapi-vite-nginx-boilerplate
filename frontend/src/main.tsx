import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ReactGA from 'react-ga4'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'
import { router } from './router'

const GA_TRACKING_ID: string = import.meta.env.VITE_GA_TRACKING_ID

if (GA_TRACKING_ID !== null && GA_TRACKING_ID !== undefined && GA_TRACKING_ID !== '') {
  ReactGA.initialize(GA_TRACKING_ID)
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)