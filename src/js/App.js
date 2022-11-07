import React from 'react'
import { BrowserRouter as ViewRouter } from 'react-router-dom'

import '../scss/app.scss'
import '../scss/theme/utility.scss'
import '../scss/components/keyboard.scss'
import '../scss/components/guitar.scss'
import '../scss/theme/shadows.scss'

import '../scss/views/view.scss'
import '../scss/views/login.scss'



import Router from './views/Router'

export default function App() {
    return (
        <ViewRouter>
            <Router/>
        </ViewRouter>
    )
}