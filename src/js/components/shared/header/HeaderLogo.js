import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function HeaderLogo() {
    return (
        <div id='header-logo'>
            <p id='header-logo-text'>muse</p>
            <FontAwesomeIcon icon={faMusic} color='white' fontSize={48}/>
        </div>
    )
}