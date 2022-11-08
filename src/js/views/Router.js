import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
    )
}