import React from 'react'

import Header from '../components/shared/header/Header'
import SubHeader from '../components/main/SubHeader'

export default function Main() {
    return (
        <div className='view' id='main'>
            <Header/>   
            <SubHeader/>
            <div id='main-recent-projects-container'>

            </div>
        </div>
    )
}