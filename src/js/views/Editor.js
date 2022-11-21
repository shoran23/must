import React, { useState } from 'react'

import Header from '../components/shared/header/Header'
import Sheet from '../components/editor/Sheet'
import Menu from '../components/editor/Menu'
import Transport from '../components/editor/Transport'
import Clefs from '../components/editor/Clefs'
import Notes from '../components/editor/Notes'
import Rests from '../components/editor/Rests'
import Instruments from '../components/editor/Instruments'

export default function Editor() {
    const [scale, setScale] = useState(1)
    const [composer, setComposer] = useState('Composer')
    const [title, setTitle] = useState('Title')

    const scaleUp = () => {
        setScale(scale + 0.05)
    }
    const scaleDown = () => {
        setScale(scale - 0.05)
    }

    return (
        <div className='view' id='editor'>
            <Header/>
            <div id='editor-body'
                style={{
                    marginTop: `${scale * 2}%`
                }}
            >
                <Menu
                    scaleUp={scaleUp}
                    scaleDown={scaleDown}
                />
                <Transport/>
                <Sheet
                    // states
                    scale={scale}
                    composer={composer}
                    title={title}
                    // functions
                    setComposer={setComposer}
                    setTitle={setTitle}
                />
                <Instruments/>
                <Clefs/>
                <Rests/>
                <Notes/>
            </div>
        </div>
    )
}