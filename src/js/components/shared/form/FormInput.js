import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function LoginInput(props) {
    return (
        <div className='form-input-container'>
            <div className='form-input-logo'>
                <FontAwesomeIcon icon={props.icon} color='white' fontSize={42}/>
            </div>
            <input
                type={props.type}
                className='form-input'
                placeholder={props.placeholder}
                value={props.userName}
                onChange={props.onChange}
            />
            {props.eye ?
                <button className='form-input-eye-button' onClick={() => props.toggleType(props.placeholder,props.type)}>
                    <FontAwesomeIcon icon={ props.type === 'password' ? faEyeSlash : faEye } color={'#454545'} fontSize={28}/>
                </button>
            :
                <React.Fragment/>
            }
        </div>
    )
}