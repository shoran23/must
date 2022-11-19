import React from 'react'
import { BrowserRouter as ViewRouter } from 'react-router-dom'

import '../scss/app.scss'
import '../scss/theme/utility.scss'
import '../scss/theme/shadows.scss'

import '../scss/components/keyboard.scss'
import '../scss/components/guitar.scss'
import '../scss/components/form-input.scss'
import '../scss/components/header.scss'
import '../scss/components/sheet.scss'

import '../scss/views/view.scss'
import '../scss/views/login.scss'
import '../scss/views/sign-up.scss'
import '../scss/views/main.scss'
import '../scss/views/editor.scss'

import Router from './views/Router'

export default function App() {
    return (
        <ViewRouter>
            <Router/>
        </ViewRouter>
    )
}