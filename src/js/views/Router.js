import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Main from './Main'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/main' element={<Main/>}/>
        </Routes>
    )
}