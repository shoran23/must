import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Notes() {
    const controls = useDragControls()
    const startDrag = e => {
        controls.start(e)
    }

    const buttons = [
        {label: 'Quarter Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/crotchet/Crotchet_White.png').default, active: require('../../../images/notes/crotchet/Crotchet_Blue.png').default}},
        {label: 'Half Note', icon: null, id: useId(), images: {inactive: require('../../../images/notes/minim/Minim_White.png').default, active: require('../../../images/notes/minim/Minim_Blue.png').default}}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-notes'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header' onPointerDown={startDrag}>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={24}/>
            </div>
            {buttons.map((button,index) => (
                <Button
                    key={button.id}
                    index={index}
                    button={button}
                    length={buttons.length}
                />
            ))}
        </motion.div>
    )
}