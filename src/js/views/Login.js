import React from 'react'

import LoginForm from '../components/login/LoginForm'

export default function Login() {
    return (
        <div className='view' id='login-view'>
            <div id='login-component' className='component'>
                <div className='login-half' id='login-form-container'>
                    <LoginForm/>
                </div>
                <div className='login-half' id='login-logo-container'>

                </div>
            </div>
        </div>
    )
}