import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars,
    faBackward,
    faBackwardFast,
    faPlay,
    faRepeat,
    faBell
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Transport() {
    const controls = useDragControls()

    const startDrag = e => {
        controls.start(e)
    }

    const buttons = [
        {label: 'Start From Beginning', icon: faBackwardFast, id: useId()},
        {label: 'Rewind', icon: faBackward, id: useId()},
        {label: 'Play', icon: faPlay, id: useId()},
        {label: 'Loop', icon: faRepeat, id: useId()},
        {label: 'Metronome', icon: faBell, id: useId()}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-transport'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header' onPointerDown={startDrag} >
                <FontAwesomeIcon icon={faBars} color='#707070'fontSize={24}/>
            </div>
            {buttons.map(button => (
                <Button
                    key={button.id}
                    button={button}
                />
            ))}
        </motion.div>
    )
}