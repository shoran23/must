import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function LoginInput(props) {
    return (
        <div className='login-input-container'>
            <div className='login-input-logo'>
                <FontAwesomeIcon icon={props.icon} color='white' fontSize={42}/>
            </div>
            <input
                type={props.type}
                className='login-input'
                placeholder={props.placeholder}
                value={props.userName}
                onChange={props.onChange}
            />
            {props.eye ?
                <button className='login-input-eye-button' onClick={props.toggleType}>
                    <FontAwesomeIcon icon={ props.type === 'password' ? faEye : faEyeSlash } color={'#454545'} fontSize={28}/>
                </button>
            :
                <React.Fragment/>
            }
        </div>
    )
}