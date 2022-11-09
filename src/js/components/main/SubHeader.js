import React from 'react'
import { faPlus, faFolder } from '@fortawesome/free-solid-svg-icons'

import SubHeaderButton from './SubHeaderButton'

export default function SubHeader() {
    const buttons = [
        {label: 'New Project', icon: faPlus, route: '/new-project', class: 'new-project'},
        {label: 'My Files', icon: faFolder, route: '/my-files', class: 'my-files'}
    ]
    return (
        <div id='main-sub-header'>
            {buttons.map((button,index) => (
                <SubHeaderButton
                    key={`main-sub-header-button-${index}`}
                    button={button}
                />
            ))}
        </div>
    )
}