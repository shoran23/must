import React, { useState } from 'react'

import Header from '../components/shared/header/Header'
import Sheet from '../components/editor/Sheet'
import Menu from '../components/editor/Menu'

export default function Editor() {

    const [scale, setScale] = useState(1)

    const scaleUp = () => {
        setScale(scale + 0.05)
    }
    const scaleDown = () => {
        setScale(scale - 0.05)
    }

    console.log('scale = ',scale)

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
                <Sheet
                    scale={scale}
                />
            </div>
        </div>
    )
}