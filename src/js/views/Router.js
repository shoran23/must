import React, { useEffect } from 'react'
import {
    Routes,
    Route,
    useLocation,
    useNavigate
} from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Main from './Main'
import Editor from './Editor'
import PlayerSandbox from './PlayerSandbox'
import Popup from './Popup'

export default function Router() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        navigate('/editor')
    },[])

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/editor' element={<Editor/>} />
                <Route path='/player-sandbox' element={<PlayerSandbox/>}/>
            </Routes>
            {location.state !== null ?
                <React.Fragment>
                    {location.state.popup ?
                        <Popup/>
                    :
                        <React.Fragment/>
                    }
                </React.Fragment>
            :
                <React.Fragment/>
            }
        </React.Fragment>
    )
}