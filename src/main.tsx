import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/authContext'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NameProvider } from './context/nameContext.tsx'
import { CategoryProvider } from './context/categoryContext.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthProvider>
            <NameProvider>
                <CategoryProvider>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </CategoryProvider>
            </NameProvider>
        </AuthProvider>
    </BrowserRouter>
)
// npm i react-router-dom@latest 