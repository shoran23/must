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
    const [menuZIndexes, setMenuZIndexs] = useState(['1', '1', '1', '1', '1', '1'])

    const scaleUp = () => {
        setScale(scale + 0.05)
    }
    const scaleDown = () => {
        setScale(scale - 0.05)
    }

    const updateMenuZIndexes = index => {
        let zIndexes = ['1', '1', '1', '1', '1', '1']
        zIndexes[index] = '2'
        setMenuZIndexs(zIndexes)
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
                    // states
                    menuIndex={0}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                    scaleUp={scaleUp}
                    scaleDown={scaleDown}
                />
                <Transport
                    // states
                    menuIndex={1}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                />
                <Sheet
                    // states
                    scale={scale}
                    composer={composer}
                    title={title}
                    // functions
                    setComposer={setComposer}
                    setTitle={setTitle}
                />
                <Instruments
                    // states
                    menuIndex={2}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                />
                <Clefs
                    // states
                    menuIndex={3}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                />
                <Rests
                    // states
                    menuIndex={4}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                />
                <Notes
                    // states
                    menuIndex={5}
                    menuZIndexes={menuZIndexes}
                    // functions
                    updateMenuZIndexes={updateMenuZIndexes}
                />
            </div>
        </div>
    )
}