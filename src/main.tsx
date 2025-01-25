import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import { ContextProvider } from './assets/contexts/contextProvider.tsx'
import App from './App.tsx'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '@/assets/i18n/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)
