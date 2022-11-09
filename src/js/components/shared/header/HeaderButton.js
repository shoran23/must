import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeaderButton(props) {
    return (
        <button className='header-button'>
            <FontAwesomeIcon icon={props.button.icon} color='white' fontSize={36}/>
            <p className='header-button-label'>{props.button.label}</p>
        </button>
    )
}