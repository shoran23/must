import React from 'react'
import { faUser, faPhone, faHouse, faMusic} from '@fortawesome/free-solid-svg-icons'

import HeaderButton from './HeaderButton'
import HeaderLogo from './HeaderLogo'

export default function Header() {
    const buttons = [
        {icon: faHouse, label: 'home', route: 'home'},
        {icon: faPhone, label: 'contact', route: 'contact'},
        {icon: faUser, label: 'account', route: 'account'}
    ]
    return (
        <div id='header'>
            <div id='header-container-left'>
                <HeaderLogo/>
            </div>
            <div id='header-container-right'>
                {buttons.map((button,index) => (
                    <HeaderButton
                        key={`header-button-${index}`}
                        button={button}
                    />
                ))}
            </div>
        </div>
    )
}