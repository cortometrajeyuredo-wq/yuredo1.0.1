/**
 * @módulo Main
 * @descripción Punto de entrada de Vite para la renderización del DOM.
 * @arquitectura src/main.tsx — Inicializa el StrictMode y el BrowserRouter.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
