import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.jsx'
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics/>
  </StrictMode>,
)
