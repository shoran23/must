import React from 'react'
import { useLocation } from 'react-router-dom'

import Account from '../components/popup/Account'
import Contact from '../components/popup/Contact'

export default function Popup() {
    const location = useLocation()
    
    const returnPopup = () => {
        switch(location.state.popup) {
            case 'contact': return (<Contact/>)
            case 'account': return (<Account/>)
        }
    }   
    return (
        <React.Fragment>
            {returnPopup()}
        </React.Fragment>
    )
}