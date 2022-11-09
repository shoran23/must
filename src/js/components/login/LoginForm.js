import React, { useState } from 'react'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import FormInput from '../shared/form/FormInput'

export default function LoginForm() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    const togglePasswordType = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    return (
        <div id='login-form'>
            <FormInput
                // states
                icon={faUser}
                placeholder={'Email'}
                value={userName}
                type='text'
                eye={false}
                // functions
                onChange={setUserName}
            />
            <FormInput
                // states
                icon={faKey}
                placeholder={'Password'}
                value={password}
                type={passwordType}
                eye={true}
                // functions
                onChange={setPassword}
                toggleType={togglePasswordType}
            />
            <button className='login-button' onClick={() => navigate('/main')}>Login</button>
            <div id='login-password-separator'/>
            <button 
                className='sign-up-button'
                onClick={() => navigate('/sign-up')}
            >
                Sign Up
            </button>
        </div>
    )
}