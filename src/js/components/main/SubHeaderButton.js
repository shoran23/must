import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubHeaderButton(props) {
    return (
        <button className={`main-sub-header-button ${props.button.class}`}>
            <FontAwesomeIcon icon={props.button.icon} color='white' fontSize={28}/>
            <p className='main-sub-header-button-text'>{props.button.label}</p>
        </button>
    )
}