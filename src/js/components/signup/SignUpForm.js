import React, { useState } from 'react'
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import FormInput from '../shared/form/FormInput'

export default function SignUpForm() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordType, setConfirmPasswordType] = useState('password')
    const toggleType = (placeholder, type) => {
        switch(placeholder) {
            case 'Password': {
                if(type === 'password') {
                    setPasswordType('text')
                } else {
                    setPasswordType('password')
                }
                break
            }
            case 'Confirm Password': {
                if(type === 'password') {
                    setConfirmPasswordType('text')
                } else {
                    setConfirmPasswordType('password')
                }
                break
            }
        }
    }
    return (
        <div className='component' id='sign-up-component'>
            <h2 id='sign-up-title'>Sign Up Below...</h2>
            <FormInput
                icon={faUser}
                placeholder='First Name'
                value={firstName}
                type='text'
                eye={false}
                onChange={setFirstName}
                toggleType={toggleType}
            />
            <FormInput
                icon={faUser}
                placeholder='Last Name'
                value={lastName}
                type='text'
                eye={false}
                onChange={setLastName}
                toggleType={toggleType}
            />
            <FormInput
                icon={faEnvelope}
                placeholder='Email'
                value={email}
                type='text'
                eye={false}
                onChange={setEmail}
                toggleType={toggleType}
            />
            <FormInput
                icon={faKey}
                placeholder='Password'
                value={password}
                type={passwordType}
                eye={true}
                onChange={setPassword}
                toggleType={toggleType}
            />
            <FormInput
                icon={faKey}
                placeholder='Confirm Password'
                value={confirmPassword}
                type={confirmPasswordType}
                eye={true}
                onChange={setConfirmPassword}           
                toggleType={toggleType}
            />
            <div id='sign-up-options'>
                <button className='sign-up-option' id='sign-up-register'>Register</button>
                <button className='sign-up-option' id='sign-up-cancel' onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    )
}