import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './routes/404/react/Error404'
import Main from './routes/main/react/Main'
import LocaleProvider from './locale/LocaleProvider'
import AppThemeProvider from './theme/AppThemeProvider'

function App() {
    return (
        <LocaleProvider>
            <AppThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </Router>
            </AppThemeProvider>
        </LocaleProvider>
    )
}

export default App
